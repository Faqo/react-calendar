import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"

export const AppRouter = () => {
    
    // const authStatus = 'non-authenticated';
    const authStatus = 'authenticated';
  
    return (
    <Routes>
        {
            (authStatus === 'non-authenticated')
            ? 
                <Route path='/auth/*' element={<LoginPage />} />
            :
                <Route path="/*" element={<CalendarPage />} />
        }

        <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}