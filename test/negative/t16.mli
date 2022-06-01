(**************************************************************************)
(*                                                                        *)
(*  GOSPEL -- A Specification Language for OCaml                          *)
(*                                                                        *)
(*  Copyright (c) 2018- The VOCaL Project                                 *)
(*                                                                        *)
(*  This software is free software, distributed under the MIT license     *)
(*  (as described in file LICENSE enclosed).                              *)
(**************************************************************************)

val f : x:int -> int -> int
(*@ r = f x y*)

(* ERROR:
   Line 12
   first parameter is named
   add ~ before x in line 12 *)

(* EXPECTED
   [125] File "t16.mli", line 12, characters 7-8:
         Error: Type checking error: parameter do not match with val type.
*)