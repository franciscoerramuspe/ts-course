There are two categories within types:
* Primitive Types
    * number
    * boolean
    * void
    * undefined
    * string
    * symbol
    * null
<br>
* Object Types
    * functions
    * arrays
    * classes
    * objects
<br>
* Why do we care about types?
    * Types are used by the TS compiler to analyze our code for errors
    * Types allow other engineers to understand what values are flowing around our codebase
<br>
* Type annotations
    * code we add to tell TS what type of value a variable will refer to
* Type Inference
    * Typescript tries to figure out what type of value a variable refers to
    * If we do the declaration and initialization in the same line (i.e let apples = 5) TS will infer the type of the varible (in this case number)
<br>
* The <em>any</em> type
    * it is a type, just as string or boolean
    * Means TS has no idea what this is - can't check for correct property references
    * <b>Avoid variables with <em>any</em> at all costs</b>
        * this is because if we have a variable/object/class or anything with type <em>any</em>, we can assign properties to this data structure or variable that we didn't program it to be allowed (i.e examples if i do let person: any = {}, then we can do person.country = 1, and we won't get an error for this)
        