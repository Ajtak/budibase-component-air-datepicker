<script>
    import {getContext, onDestroy} from "svelte"
    import {onMount} from 'svelte'
    import AirDatepicker from "air-datepicker";
    import 'air-datepicker/air-datepicker.css';
    import {v4 as uuidv4} from 'uuid';
    import Locale  from './Locale.ts'

    const {styleable} = getContext("sdk")

    import moment from "moment";

    export let field;
    export let outputFormat;
    export let localeString;
    export let label;
    export let defaultValue;



    let input;
    let datePicker;

    let labelFor = uuidv4();


    const component = getContext("component");
    const formContext = getContext("form");
    const formStepContext = getContext("form-step");


    const formApi = formContext?.formApi;
    $: formStep = formStepContext ? $formStepContext || 1 : 1;
    $: formField = formApi?.registerField(field, "text", 0, false, false, formStep);

    let fieldApi;
    let fieldState;

    $: unsubscribe = formField?.subscribe((value) => {
        fieldState = value?.fieldState;
        fieldApi = value?.fieldApi;
    });

    onDestroy(() => {
        fieldApi?.deregister();
        unsubscribe?.();
    });


    onMount(() => {
        datePicker = new AirDatepicker(input, {
            locale: Locale.getLocale(localeString),
            autoClose: true,
            onSelect({date, formattedDate, datepicker}) {
                let dateOutput = moment(date).format(outputFormat);
                fieldApi?.setValue(dateOutput);
            },
        });

        datePicker.selectDate(new Date(defaultValue));
        input.addEventListener('click', openPicker);
    });


    function openPicker() {
        datePicker?.show();
    }
</script>


<div class="spectrum-Form-item span-6 above" use:styleable={$component.styles} draggable="true">
    {#if label}
        <label for="{labelFor}" contenteditable="false"
               class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel">
            {label}
        </label>
    {/if}

    <div class="spectrum-Form-itemField">
        <div class="spectrum-InputGroup spectrum-Datepicker" aria-readonly="false" aria-required="false"
             aria-haspopup="true">
            <div class="spectrum-Textfield spectrum-InputGroup-textfield ">
                <input id="{labelFor}" data-input="" type="text" bind:this={input}
                       class="spectrum-Textfield-input spectrum-InputGroup-input">
            </div>

            <button on:click={openPicker} type="button"
                    class="spectrum-Picker spectrum-Picker--sizeM spectrum-InputGroup-button"
                    tabindex="-1">
                <div class="abs-tooltip">
                    <div class="icon">
                        <svg class="spectrum-Icon spectrum-Icon--sizeM" focusable="false"
                             aria-hidden="false" aria-label="Calendar"
                             style=" --hover-color: var(--spectrum-alias-icon-color-selected-hover)">
                            <use xlink:href="#spectrum-icon-18-Calendar" style="pointer-events: none;"></use>
                        </svg>
                    </div>
                </div>
            </button>
        </div>
    </div>
</div>

<style>
    .spectrum-Form-item.above {
        display: flex;
        flex-direction: column;
    }

    .spectrum-Datepicker {
        width: 100%;
        overflow: hidden;
    }

    .spectrum-Datepicker .spectrum-Textfield {
        width: 100%;
    }
</style>
