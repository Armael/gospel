exception E of int * int

val f : int -> unit
(*@ f i
    raises E _ -> false *)

(* EXPECTED
   [125] File "exn_arity.mli", line 5, characters 11-23:
         Error: Type checking error: Exception pattern doesn't match its type.
*)