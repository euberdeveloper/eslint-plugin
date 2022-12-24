'use strict';

/*
consistent-test-it	Enforce test and it usage conventions			wrench		
expect-expect	Enforce assertion to be made in a test body		white_check_mark			
max-expects	Enforces a maximum number assertion calls in a test body					
max-nested-describe	Enforces a maximum depth to nested describe calls					
no-alias-methods	Disallow alias methods	white_check_mark	art	wrench		
no-commented-out-tests	Disallow commented out tests		white_check_mark			
no-conditional-expect	Disallow calling expect conditionally	white_check_mark				
no-conditional-in-test	Disallow conditional logic in tests					
no-deprecated-functions	Disallow use of deprecated functions	white_check_mark		wrench		
no-disabled-tests	Disallow disabled tests		white_check_mark			
no-done-callback	Disallow using a callback in asynchronous tests and hooks	white_check_mark			bulb	
no-duplicate-hooks	Disallow duplicate setup and teardown hooks					
no-export	Disallow using exports in files containing tests	white_check_mark				
no-focused-tests	Disallow focused tests	white_check_mark			bulb	
no-hooks	Disallow setup and teardown hooks					
no-identical-title	Disallow identical titles	white_check_mark				
no-if	Disallow conditional logic					x
no-interpolation-in-snapshots	Disallow string interpolation inside snapshots	white_check_mark				
no-jasmine-globals	Disallow Jasmine globals	white_check_mark		wrench		
no-large-snapshots	Disallow large snapshots					
no-mocks-import	Disallow manually importing from __mocks__	white_check_mark				
no-restricted-jest-methods	Disallow specific jest. methods					
no-restricted-matchers	Disallow specific matchers & modifiers					
no-standalone-expect	Disallow using expect outside of it or test blocks	white_check_mark				
no-test-prefixes	Require using .only and .skip over f and x	white_check_mark		wrench		
no-test-return-statement	Disallow explicitly returning from tests					
prefer-called-with	Suggest using toBeCalledWith() or toHaveBeenCalledWith()					
prefer-comparison-matcher	Suggest using the built-in comparison matchers			wrench		
prefer-each	Prefer using .each rather than manual loops					
prefer-equality-matcher	Suggest using the built-in equality matchers				bulb	
prefer-expect-assertions	Suggest using expect.assertions() OR expect.hasAssertions()				bulb	
prefer-expect-resolves	Prefer await expect(...).resolves over expect(await ...) syntax			wrench		
prefer-hooks-in-order	Prefer having hooks in a consistent order					
prefer-hooks-on-top	Suggest having hooks before any test cases					
prefer-lowercase-title	Enforce lowercase test names			wrench		
prefer-mock-promise-shorthand	Prefer mock resolved/rejected shorthands for promises			wrench		
prefer-snapshot-hint	Prefer including a hint with external snapshots					
prefer-spy-on	Suggest using jest.spyOn()			wrench		
prefer-strict-equal	Suggest using toStrictEqual()				bulb	
prefer-to-be	Suggest using toBe() for primitive literals	art		wrench		
prefer-to-contain	Suggest using toContain()	art		wrench		
prefer-to-have-length	Suggest using toHaveLength()	art		wrench		
prefer-todo	Suggest using test.todo			wrench		
require-hook	Require setup and teardown code to be within a hook					
require-to-throw-message	Require a message for toThrow()					
require-top-level-describe	Require test cases and hooks to be inside a describe block					
valid-describe-callback	Enforce valid describe() callback	white_check_mark				
valid-expect	Enforce valid expect() usage	white_check_mark				
valid-expect-in-promise	Require promises that have expectations in their chain to be valid	white_check_mark				
valid-title	Enforce valid titles	white_check_mark		wrench
*/

module.exports = {
    // Enforce test and it usage conventions. Fixable.
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
    "consistent-test-it": ["error"],

    // Enforce assertion to be made in a test body. Recommended.
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
    "expect-expect": ["error"],

    // Enforces a maximum number assertion calls in a test body
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
    // "max-expects": ["error"],

    // Enforces a maximum depth to nested describe calls
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
    // "max-nested-describe": ["error"],

    // Disallow alias methods. Recommended. Fixable.
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
    "no-alias-methods": ["error"],

    // Disallow commented out tests. Recommended.   
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
    "no-commented-out-tests": ["error"],

    // Disallow calling expect conditionally. Recommended.
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
    "no-conditional-expect": ["error"],

    // Disallow conditional logic in tests.
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
    // "no-conditional-in-test": ["error"],

    // Disallow use of deprecated functions. Recommended. Fixable.
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
    "no-deprecated-functions": ["error"],
};