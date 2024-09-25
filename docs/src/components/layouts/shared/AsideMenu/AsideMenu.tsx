import { Card, Spacing, Title } from '@vkontakte/vkui';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface AsideMenuItem {
    slug?: string;
    title: string;
}

export interface AsideMenuProps {
    items?: AsideMenuItem[];
}

const defaultItems: AsideMenuItem[] = [];

export function AsideMenu(props: AsideMenuProps) {
    const items = props.items ?? defaultItems;

    return (
        <aside className="aside-menu">
            <Card mode="shadow" className="aside-menu_card">
                <Title level="2" className="aside-menu_title">Разделы</Title>
                <Spacing size={8}/>

                {items.map((item) => {
                    if (item.slug) {
                        return (
                            <div className="aside-menu-item" key={item.title}>
                                <Link to={`/articles/${item.slug}`}>{item.title}</Link>
                            </div>
                        );
                    } else {
                        return (
                            <React.Fragment key={item.title}>
                                <Spacing size={20}/>
                                <Title level="3">{item.title}</Title>
                                <Spacing size={8}/>
                            </React.Fragment>
                        )
                    }
                })}

                <Spacing size={32}/>
                <Link to="/">← К таблице токенов</Link>
            </Card>
        </aside>
    );
}
