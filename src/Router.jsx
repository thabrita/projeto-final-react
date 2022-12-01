import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>Ínicio</h1>}/>
                <Route path='/sobre' element={<h1>Sobre</h1>}/>
                <Route path='/portifolio' element={<h1>Portifólio</h1>}/>
                <Route path='/contato' element={<h1>Contato</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}