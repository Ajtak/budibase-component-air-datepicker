<script>
    import {getContext, onDestroy} from "svelte"
    import {onMount} from 'svelte'
    import AirDatepicker from "air-datepicker";
    import 'air-datepicker/air-datepicker.css';

    const {styleable} = getContext("sdk")

    import localeEn from 'air-datepicker/locale/en';
    import localeCs from 'air-datepicker/locale/cs';
    import moment from "moment";

    let input;
    export let field;
    export let outputFormat;


    const component = getContext("component");
    const formContext = getContext("form");
    const formStepContext = getContext("form-step");
    const fieldGroupContext = getContext("field-group")

    const formApi = formContext?.formApi;
    $: formStep = formStepContext ? $formStepContext || 1 : 1;
    $: formField = formApi?.registerField(field, "datetime", 0, false, false, formStep);

    let fieldApi;


    $: unsubscribe = formField?.subscribe((value) => {
        fieldApi = value?.fieldApi;
    });

    onDestroy(() => {
        fieldApi?.deregister();
        unsubscribe?.();
    });

    onMount(() => {
        console.log("Output date format ois " + outputFormat);
        new AirDatepicker(input, {
            locale: localeCs,
            onSelect({date, formattedDate, datepicker}) {
                console.log('Selected date:' + formattedDate);
                let dateOutput = moment(date).format(outputFormat);
                datepicker.hide();
                fieldApi?.setValue(dateOutput);
            },

        });
    });

</script>


<div class="spectrum-Form-item span-6 above" style="width: 100%" use:styleable={$component.styles} draggable="true">
    <div class="spectrum-Form-itemField">
        <div class="spectrum-InputGroup spectrum-Datepicker" aria-readonly="false" aria-required="false"
             aria-haspopup="true">
            <div class="spectrum-Textfield spectrum-InputGroup-textfield ">
                <input data-input="" type="text" bind:this={input}
                       class="spectrum-Textfield-input spectrum-InputGroup-input">
            </div>

            <button type="button" class="spectrum-Picker spectrum-Picker--sizeM spectrum-InputGroup-button"
                    tabindex="-1">
                <div class="abs-tooltip">
                    <div class="icon ">
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
