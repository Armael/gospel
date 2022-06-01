(**************************************************************************)
(*                                                                        *)
(*  GOSPEL -- A Specification Language for OCaml                          *)
(*                                                                        *)
(*  Copyright (c) 2018- The VOCaL Project                                 *)
(*                                                                        *)
(*  This software is free software, distributed under the MIT license     *)
(*  (as described in file LICENSE enclosed).                              *)
(**************************************************************************)

val f : ('a -> 'b -> 'c) -> 'a -> 'b -> 'c
(*@ r = f x y *)

(* ERROR:
   Line 12
   insufficient parameters in function header
   add another parameter after y in line 12 *)

(* EXPECTED
   [125] File "t23.mli", line 12, characters 5-6:
         Error: Type checking error: too few parameters.
*)