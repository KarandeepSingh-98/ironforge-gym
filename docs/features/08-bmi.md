# Feature 08 — BMI Calculator

## Objective
Provide an educational BMI calculator using height and weight.

## Inputs
- Height in centimeters.
- Weight in kilograms.

## Output
- BMI value.
- BMI category.

## Categories
- Underweight: BMI below 18.5
- Normal: BMI 18.5–24.9
- Overweight: BMI 25–29.9
- Obese: BMI 30 or above

## Formula
BMI = weight(kg) / height(m)^2

## Validation
Handle:
- Empty fields.
- Non-numeric input.
- Zero.
- Negative values.
- Unrealistic values where appropriate.

## Requirements
- Clear labels.
- Helpful validation messages.
- Result should be easy to understand.
- Do not present BMI as a medical diagnosis.
- Add a short educational disclaimer.

## Version 1
Use Vanilla JavaScript.

## React Version
Use controlled inputs and React state.

## Acceptance Criteria
- Calculation is mathematically correct.
- Invalid input is handled.
- Result updates correctly.
- No console errors.
