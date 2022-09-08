import React from 'react';
import {NextPageAuth} from "@/providers/private-page.interface";
import { api } from '@/store/api/api';
import Layout from 'layout/Layout';
import Menu from 'layout/sidebar/menu/Menu';

const SubscriptionsPage: NextPageAuth = () => {

    const {data} = api.useGetProfileQuery(null)
    return (
        <Layout title="Мои подписки">
            <Menu
                title="Мои подписки"
                items={
                data?.subscriptions?.map(({toChannel}) => ({
                    title: toChannel.name,
                    image: toChannel.avatarPath,
                    link: `/c/${toChannel.id}`
                })) || []
            } />
        </Layout>
    );
};

SubscriptionsPage.isOnlyUser = true

export default SubscriptionsPage;