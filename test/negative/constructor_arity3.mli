type t = L of t * t | E

val f : t -> int
(*@ r = f a
    ensures
      match a with
      | L E E -> r = 1
*)

(* EXPECTED
   [125] File "constructor_arity3.mli", line 7, characters 12-13:
         Error: Syntax error.
*)