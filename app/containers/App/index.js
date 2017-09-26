/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <Layout>
      <Helmet
        titleTemplate="%s - IFload"
        defaultTitle="IFload - Upload, Berbagi dan Download File secara Gratis"
      >
        <meta name="description" content="Temukan, Bagikan, Upload dan Download File secara Gratis dengan kecepatan Unggah dan Unduh Tanpa Batas dengan Kemudahan dan Kenyamanan tanpa iklan menganggu" />
        <meta name="Keywords" content="file sharing, free web space, online storage, share files, photo image music mp3 video sharing, Google Drive Sharer, file hosting, internet file sharing"/>
        <meta name="robots" content="noodp"/>
        <link rel="publisher" href="https://plus.google.com/107594278007641832514/"/>
        <meta property="og:locale" content="id_ID"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="IFload - Upload, Berbagi dan Download File secara Gratis"/>
        <meta property="og:site_name" content="IFload"/>
        <meta property="fb:app_id" content="299616453793169"/>
        <meta property="og:image" content="https://i.imgbox.com/5adBdazd.jpg"/>
        <meta property="og:image:width" content="1024"/><meta property="og:image:height" content="500"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:description" content="Temukan, Bagikan, Upload dan Download File secara Gratis dengan kecepatan Unggah dan Unduh Tanpa Batas dengan Kemudahan dan Kenyamanan tanpa iklan menganggu"/>
        <meta name="twitter:title" content="IFload - Upload, Berbagi dan Download File secara Gratis"/>
        <meta name="twitter:site" content="@IFloadID"/>
        <meta name="twitter:image" content="https://i.imgbox.com/5adBdazd.jpg"/>
        <meta name="generator" content="IFload v.1"/>
        <link href="//www.ifload.com/includes/assets/img/favicon.png" rel="icon" type="image/png"/>
        <link href="//www.ifload.com/includes/assets/img/favicon.ico" rel="shortcut icon"/>
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}
