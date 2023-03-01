---
title: "Aladino syntax"
id: "syntax"
slug: "syntax"
---

The syntax of Aladino is quite simple. Here's the [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) grammar representation:

```
prog := stat_list

stat := expr

expr := expr BINOP expr
    | UNARYOP expr
    | TIMESTAMP
    | RELATIVE_TIMESTAMP
    | NUMBER
    | STRING
    | BOOLEAN
    | '(' expr ')'
    | '[' expr_list ']'
    | '$' IDENTIFIER '(' expr_list ')'
    | '(' expr_list '=>' expr  ')'

expr_list :=
        expr ',' expr_list
    | expr
    |

TIMESTAMP :=
        YYYYMMDD
    | YYYY-MM-DD
    | YYYYMMDDTHH:MM:SS
    | YYYY-MM-DDTHH:MM:SS

RELATIVE_TIMESTAMP := NUMBER TIME_UNIT ago

TIME_UNIT :=
        'year'   | 'years'
    | 'month'  | 'months'
    | 'week'   | 'weeks'
    | 'day'    | 'days'
    | 'hour'   | 'hours'
    | 'minute' | 'minutes'

BINOP :=
        '==' | '>=' | '>' | '<' | '<='
    | '&&' | '||'

UNARYOP := '!'
```

This allows us to specify:

1. Logical expressions: e.g. `"a" == "a"` or `$fun() == 1`;
2. Function calls: e.g. `$label("bug")`
3. Lambda functions: e.g. `($dev => $dev == $author())`
