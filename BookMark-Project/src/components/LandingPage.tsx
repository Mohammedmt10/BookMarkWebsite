import { RecoilRoot, useRecoilValue } from "recoil";
import { Header } from "./Header";
import { Main } from "./Main";

export function LandingPage() {
    return <div>
        <div className="max-w-screen">
        <RecoilRoot>
            <Header />
            <Main />
        </RecoilRoot>
        </div>
        
    </div>
}