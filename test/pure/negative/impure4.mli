val f : int -> int
(*@ y = f x
    pure
    checks x > 0 *)

(* EXPECTED
   [125] File "impure4.mli", line 2, characters 5-6:
         Error: Type checking error: a pure function cannot raise exceptions.
*)