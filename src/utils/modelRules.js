export default function modelRules(value, {
    nullable,
    type,
    defaultvalue,
    forbidden,
}) {
    let validateResult = {
        value: null,
        errors: [],
    };

    if (forbidden) {
        validateResult.errors.push(`O campo é proibido`)
    } else {
        if (!nullable && !value) {
            validateResult.errors.push('O campo não pode ser nulo')
        } else if (nullable && !value && defaultvalue) {
            validateResult.value = defaultvalue;
        } else if (((typeof value).toString).toLowerCase() !== type)  {
            validateResult.errors.push(`O campo é esperado o tipo ${type} mas recebeu ${typeof value}`);
        }
    }
}