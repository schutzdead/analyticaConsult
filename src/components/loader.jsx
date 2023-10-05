import { LinearProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material";

export function Loading () {
    return (
        <div className="w-full">
            <div className="flex items-center justify-center place-self-center h-[250px]">
                <LinearProgress color="primary" className="w-60"/>
            </div>
        </div>
    )
}