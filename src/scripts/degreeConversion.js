export const degreeConversion = (value, from, to) =>
{
    const celsiusTo = (value, to) =>
    {
        if(to === 'fahrenheit') return (value * (9 / 5)) + 32;
        else if(to === 'kelvin') return value + 273.15;
    }

    const fahrenheitTo = (value, to) =>
    {
        if(to === 'celsius') return (value - 32) * (5 / 9);
        else if(to === 'kelvin') return (value - 32) * (5 / 9) + 273.15;
    }

    const kelvinTo = (value, to) =>
    {
        if(to === 'celsius') return value - 273.15;
        else if(to === 'fahrenheit') return (value - 273.15) * (9 / 5) + 32;
    }

    switch(from)
    {
        case 'celsius':
            return celsiusTo(value, to).toFixed();
        case 'fahrenheit':
            return fahrenheitTo(value, to).toFixed();
        case 'kelvin':
            return kelvinTo(value, to).toFixed();
        default:
            return '';
    }
}