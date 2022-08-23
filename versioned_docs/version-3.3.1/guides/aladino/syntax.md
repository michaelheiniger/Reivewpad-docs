---
title: "Aladino Syntax"
id: "syntax"
---

The syntax of Aladino is quite simple. Here's the BNF grammar representation:

```yaml
prog := stat_list
stat := expr
expr := expr BINOP expr
      | UNARYOP expr
      | TIMESTAMP
      | RELATIVE_TIMESTAMP
      | NUMBER
      | STRING
      | BOOLEAN
      | '[' expr_list ']'
      | '$' IDENTIFIER '(' expr_list ')'

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