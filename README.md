# Test_1

How-to:

1. Clone repo
2. Go to project root

```
node app 4 3 8
> Your triangle is scalene
```
```
node app 5 5 8
> Your triangle is isosceles
```

```
node app h h h 
> Your triangle is equilateral
```

Any value is accepted.

| Test case ID | Test case description                                                                | Prerequisites | Test steps               | Test data               | expected result                                                  | actual result                         | status  |
|--------------|--------------------------------------------------------------------------------------|---------------|--------------------------|-------------------------|------------------------------------------------------------------|---------------------------------------|---------|
| TC1          | The objective is to verify that  3 equal inputs will return an  equilateral triangle | open program  | The user inputs 3 values | any values are accepted | if all values are equal program will return equilateral triangle | program returned equilateral triangle | success |

| Test case ID | Test case description                                                               | Prerequisites | Test steps               | Test data               | expected result                                                  | actual result                     | status  |
|--------------|-------------------------------------------------------------------------------------|---------------|--------------------------|-------------------------|------------------------------------------------------------------|-----------------------------------|---------|
| TC2          | The objective is to verify that  3 different inputs will return a  scalene triangle | open program  | The user inputs 3 values | any values are accepted | if all values are different program will return scalene triangle | program returned scalene triangle | success |

| Test case ID | Test case description                                                                              | Prerequisites | Test steps               | Test data               | expected result                                                                     | actual result                       | status  |
|--------------|----------------------------------------------------------------------------------------------------|---------------|--------------------------|-------------------------|-------------------------------------------------------------------------------------|-------------------------------------|---------|
| TC3          | The objective is to verify that  2 equal and 1 different inputs will return a  isoscelene triangle | open program  | The user inputs 3 values | any values are accepted | if 2 values are equal and 1 value different program will return iscosclene triangle | program returned isosclene triangle | success |

| Test case ID | Test case description                                                                      | Prerequisites | Test steps                                 | Test data               | expected result                                           | actual result | status  |
|--------------|--------------------------------------------------------------------------------------------|---------------|--------------------------------------------|-------------------------|-----------------------------------------------------------|---------------|---------|
| TC4          | The objective is to verify that  program will fail if less or more than 3 values are input | open program  | The user inputs less or more than 3 values | any values are accepted | program fails, and user is notified of his/her wrongdoing | program fails | success |
