import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import SideNav, { SideNavProps, MainNavItemType } from './SideNav';
import Header from '../Header/Header';

export default {
  component: SideNav,
  title: 'Sidenav',
} as Meta;

const Template: Story<SideNavProps> = (args) => {
  const [isNavOpened, setNavOpened] = useState(false);
  const handleNavOpen = (status: boolean) => {
    setNavOpened(status);
  };

  return (
    <BrowserRouter>
      <Header isNavOpened={isNavOpened} onNavOpen={handleNavOpen} />
      <Container>
        <SideNav isNavOpened={isNavOpened} onNavOpen={handleNavOpen} menuData={args.menuData} position={args.position} />
        <Main />
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--header-height);
  min-height: calc(100vh - 1px);
`;

const Main = styled.main`
  background: #E5E5E5;
  flex: 1;
  width: 100%;
  @media (min-width: 1024px) {
    width: calc(100% - var(--side-nav1-width) - var(--side-nav2-width));
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(100% - var(--side-nav1-width));
  }
`;

const menuData = [
	{
		"name": "Me@Home",
		"icon": "Associate",
		"children": [
			{
				"name": "Home",
				"icon": "home",
				"children": [
					{
						"name": "Home",
						"url": "/home"
					}
				]
			},
			{
				"name": "My Profile",
				"icon": "contact_mail_outlined",
				"children": [
					{
						"name": "Me",
						"url": "/profile/me"
					},
					{
						"name": "Career",
						"url": "/profile/career"
					}
				]
			},
			{
				"name": "Approvals Inbox",
				"icon": "mail_outline",
				"children": [
					{
						"name": "All",
						"url": "/inbox/all"
					},
					{
						"name": "People",
						"url": "/inbox/people"
					},
					{
						"name": "Technology",
						"url": "/inbox/technology"
					}
				]
			},
			{
				"name": "Settings",
				"icon": "settings",
				"children": [
					{
						"name": "Settings",
						"url": "/settings"
					}
				]
			}
		]
	},
	{
		"name": "Money",
		"icon": "paid_outlined",
		"children": [
			{
				"name": "Money",
				"icon": "paid_outlined",
				"children": [
					{
						"name": "Direct Deposit",
						"url": "/money/direct"
					},
					{
						"type": "seperator"
					},
					{
						"name": "My paystub (Coming Soon)",
						"url": "/money/paystub"
					}
				]
			}
		]
	}
] as MainNavItemType[];

export const Primary = Template.bind({});
Primary.args = {
  menuData: menuData
};

Primary.parameters = {
  layout: 'fullscreen',
}
