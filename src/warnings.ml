open Ppxlib
open Utils

type kind =
  | Return_unit_without_modifies of string
  | Invalid_coercion_type of string
  | Coercion_cycle of (string * string * string) list
  | Coercion_already_defined of (string * string * string) list
  | Not_a_constructor of string
  | Formula_expected
  | Term_expected
  | Duplicated_variable of string
  | Unbound_variable of string
  | Pattern_bad_type of string * string
  | Bad_type of string * string
  | Bad_arity of string * int * int
  | Bad_type_arity of string * int * int
  | Name_clash of string
  | Syntax_error
  | Illegal_character of char
  | Illegal_escape of string * string option
  | Unterminated_comment
  | Duplicated_argument of string
  | Unsupported of string
  | Type_checking_error of string
  | Module_not_found of string
  | Free_variables of string list
  | Invalid_int_literal of string * char option
  | Symbol_not_found of string list
  | Bad_record_field of string
  | Public_type_invariant of string
  | Circular_open
  | Field_application of string
  | Duplicated_record_field of string
  | Partial_application of string
  | Unknown_record_field of string
  | Cyclic_type_declaration of string
  | Predicate_symbol_expected of string
  | Function_symbol_expected of string
  | Pattern_not_exhaustive of string

type error = location * kind

exception Error of error

let error ~loc k = raise (Error (loc, k))
let type_checking_error ~loc s = error ~loc (Type_checking_error s)
let unsupported ~loc s = error ~loc (Unsupported s)

open Fmt

let function_ ppf (f, t1, t2) = pf ppf "%s: %s -> %s" f t1 t2

let pp_kind ppf = function
  | Return_unit_without_modifies f ->
      pf ppf
        "The function `%s' returns `unit'@ but its specifications does not \
         contain any `modifies' clause"
        f
  | Invalid_coercion_type f ->
      pf ppf "The function `%s' does not have a valid coercion type" f
  | Coercion_cycle fl ->
      pf ppf "This coercion introduces a cycle:@\n  @[%a@]"
        (list ~sep:newline function_)
        fl
  | Coercion_already_defined fl ->
      pf ppf "A coercion between these types already exists:@\n  @[%a@]"
        (list ~sep:newline function_)
        fl
  | Not_a_constructor f -> pf ppf "The symbol `%s' is not a constructor" f
  | Formula_expected -> pf ppf "A formula was expected"
  | Term_expected -> pf ppf "A term was expected"
  | Duplicated_variable s ->
      pf ppf "The variable `%s' is duplicated in this pattern" s
  | Unbound_variable s ->
      pf ppf "The variable `%s' does not appear in this pattern" s
  | Pattern_bad_type (t1, t2) ->
      pf ppf
        "This pattern matches values of type `%s'@ but a pattern was expected \
         which matches values of type@ `%s'"
        t1 t2
  | Bad_type (t1, t2) ->
      pf ppf "This term has type `%s'@ but a term was expected of type@ `%s'" t1
        t2
  | Bad_arity (f, expected, got) ->
      pf ppf
        "The constructor `%s' expects `%d' argument(s)@ but is applied to %d \
         argument(s) here"
        f expected got
  | Name_clash s ->
      pf ppf "A declaration for `%s' already exists in this context" s
  | Syntax_error -> pf ppf "Syntax error"
  | Illegal_character c -> pf ppf "Illegal character `%c'" c
  | Unterminated_comment -> pf ppf "Unterminated comment"
  | Illegal_escape (s, explanation) ->
      pf ppf "Illegal backslash escape in string or character (%s)%a" s
        (option (fmt ": %s"))
        explanation
  | Duplicated_argument arg -> pf ppf "Duplicated argument `%s'" arg
  | Unsupported s -> pf ppf "Not yet supported: %s" s
  | Type_checking_error s -> pf ppf "Type checking error: %s" s
  | Module_not_found m -> pf ppf "No module with name `%s'" m
  | Free_variables vl ->
      pf ppf "Unbound variables: %a" (list ~sep:comma string) vl
  | Invalid_int_literal (s, c) ->
      pf ppf "Invalid int literal: `%s%a'" s (option char) c
  | Symbol_not_found sl ->
      pf ppf "Symbol %a not found" (list ~sep:(const string ".") string) sl
  | Bad_record_field f -> pf ppf "The record field `%s' does not exist" f
  | Public_type_invariant t -> pf ppf "Invariant on public type `%s'" t
  | Circular_open -> pf ppf "This `open' introduces a dependency cycle"
  | Field_application f -> pf ppf "The record field `%s' cannot be applied" f
  | Duplicated_record_field f ->
      pf ppf "A record field with name `%s' already exists" f
  | Partial_application s ->
      pf ppf "The symbol `%s' cannot be partially applied" s
  | Unknown_record_field s -> pf ppf "The field `%s' is unknown" s
  | Bad_type_arity (t, expected, got) ->
      pf ppf
        "The type `%s' expects %d argument(s)@ but was given %d argument(s) \
         here"
        t expected got
  | Cyclic_type_declaration t ->
      pf ppf "The type declaration for `%s' contains a cycle" t
  | Predicate_symbol_expected s -> pf ppf "Not a predicate symbol: `%s'" s
  | Function_symbol_expected s -> pf ppf "Not a function symbol: `%s'" s
  | Pattern_not_exhaustive p ->
      pf ppf
        "This pattern-matching is not exhaustive.@\n\
         Here is an example of a case that is not matched:@\n\
        \  %s" p

let styled_list l pp = List.fold_left (fun acc x -> styled x acc) pp l

let pp ppf (loc, k) =
  pf ppf "%a@\n%a: @[%a.@]"
    (styled `Bold Location.print)
    loc
    (styled_list [ `Red; `Bold ] string)
    "Error" pp_kind k
