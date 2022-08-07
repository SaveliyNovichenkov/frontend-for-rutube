import { NextPage } from "next/types"

export type TypeRoles = {
    isOnlyUser?: boolean
}

export type NextPageAuth<T = {}> = NextPage<T> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }