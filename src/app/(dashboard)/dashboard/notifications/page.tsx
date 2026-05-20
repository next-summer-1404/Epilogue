"use client"
import React from 'react'
import DashboardLayout from '../../DashboardLayout'
import Container from '../../components/common/Container'
import NotifList from './components/NotifList'

const notificationsPage = () => {

    return (
        <DashboardLayout>
            <Container>
                <div className="p-4 space-y-4">
                    <NotifList />

                </div>
            </Container>
        </DashboardLayout>
    )
}

export default notificationsPage
