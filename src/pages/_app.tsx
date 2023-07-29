import {store} from '@/Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux';
import {NavbarComponent} from "@/components/Navbar";
import RootWrapper from "@/components/RootWrapper";

export default function App({Component, pageProps}: AppProps) {

    return (
        <Provider store={store}>
            <RootWrapper>
                <NavbarComponent/>
                <Component {...pageProps} />
            </RootWrapper>
        </Provider>
    )
}
