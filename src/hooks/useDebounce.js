import {useState, useEffect} from "react";

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    // 재 호출 시(입력을 더 한다면)에 useEffect가 종료 후 호출되니 return clearTimeout이 불리게된다.
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue;
}
