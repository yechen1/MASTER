import React from "react";

interface HomeProps{
    id: string;
}

export const Page: React.FC<HomeProps> = (props)=>{
    return(
        <div>Page</div>
    );
}