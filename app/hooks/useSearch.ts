import {ChangeEvent, useState} from "react"
import { useDebounce } from "./useDebounce"
import {videoApi} from "@/store/api/video.api";



export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debounceSearch = useDebounce(searchTerm, 500)

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const {data, isSuccess} = videoApi.useGetVideoBySearchTermQuery(debounceSearch, {
        skip: !debounceSearch,
        selectFromResult: ({data, ...props}) => ({
            data: data?.slice(0.6),
            ...props
        })
    })

    return {
        handleSearch, data, isSuccess, searchTerm
    }
}