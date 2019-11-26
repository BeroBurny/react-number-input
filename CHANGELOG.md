# Changelog 
## 0.0.1-11
* improve separator handling

## 0.0.1-10
* refactor `getValidSelectionPosition` to get more consistent cursor position  
* set cursor after separator if entire number is changed with separator
* if is 1st number 0 then he become new number

## 0.0.1-9
* fix cannot read property `length` of `undefined`
* fix reference error

## 0.0.1-8
* small work around in `getValidSelectionPosition` to fix positioning  
* fix bug's on deleting numbers with backspace  

## 0.0.1-7
* improve unit tests
* change single `digits` value with `minimumFractionDigits` and `maximumFractionDigits` to grain more control over decimal values  

## 0.0.1-5
* add build and publish script (already happens 2 times to forget build a project before publish)

## 0.0.1-4
* fix onBlur event (now is normal)

## 0.0.1-2
* Refactor code
  * now `NumberInput` need to be imported as named import `FormattedNumberInput`
  * add alias for `FormattedNumberInput`  to be `CurrencyInput`
* added unit test's
* fix bug with changed value

## 0.0.1-1
* fix bug with negative numbers
* fix bug if is digits number is bigger that 100