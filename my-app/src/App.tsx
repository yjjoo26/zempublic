// import React from 'react';
// import logo from './logo.svg';
import './App.css'
// import Button from 'antd/es/button';
import ButtonTest from './General/ButtonTest'
// import IconTest from './General/IconTest'
import TypoTest from './General/TypoTest'
import GridTest from './General/GridTest'
import LayoutTest from './General/LayoutTest'
import AffixTest from './Navigation/AffixTest'
import BreadcrumbTest from './Navigation/BreadcrumbTest'
import PaginationTest from './Navigation/PaginationTest'
import HeaderTest from './Navigation/HeaderTest'
// import DropdownTest from './Navigation/DropdownTest';
// import MenuTest from './Navigation/Menutest';
// import StepTest from './Navigation/Steptest';
import AvatarTest from './DataDisPpay/AvatarTest'
import BadgeTest from './DataDisPpay/BadgeTest'
import CommentTest from './DataDisPpay/CommentTest'
import CollapsTest from './DataDisPpay/Collapstest'
import CarouselTest from './DataDisPpay/Carousel'
import CardTest from './DataDisPpay/CardTest'
import CalendarTest from './DataDisPpay/CalendarTest'
import DescriptionsTest from './DataDisPpay/DescriptionsTest'
import EmptyTest from './DataDisPpay/EmptyTest'
import ListTest from './DataDisPpay/ListTest'
import PropoverTest from './DataDisPpay/PropoverTest'
import StaticTest from './DataDisPpay/StaticTest'
import TreeTest from './DataDisPpay/TreeTest'
import TooltipTest from './DataDisPpay/TooltipTest'
import TimelineTest from './DataDisPpay/TimelineTest'
import TagTest from './DataDisPpay/TagTest'
import TabTest from './DataDisPpay/TabTest'
import TableTest from './DataDisPpay/TableTest'
import AutoCompleteTest from './DataEntry/AutoCompleteTest'
import CheckboxTest from './DataEntry/CheckboxTest'
import CascaderTest from './DataEntry/CascaderTest'
import DatePickerTest from './DataEntry/DatePickerTest'
import FormTest from './DataEntry/FormTest'
import InputNumberTest from './DataEntry/InputNumberTest'
import InputTest from './DataEntry/InputTest'
import MentionsTest from './DataEntry/MentionsTest'
import RateTest from './DataEntry/RateTest'
import RadioTest from './DataEntry/RadioTest'
import SwitchTest from './DataEntry/SwitchTest'
import SliderTest from './DataEntry/SliderTest'
// import SelectTest from './DataEntry/SelectTest';
// import TreeSelectTest from './DataEntry/TreeSelectTest';
// import TransferTest from './DataEntry/TransferTest';
import TimePickerTest from './DataEntry/TimePickerTest'
import UploadTest from './DataEntry/UploadTest'
import AlertTest from './Feedback/AlertTest'
import MessageTest from './Feedback/MessageTest'
import NotificationTest from './Feedback/NotificationTest'
import ProgressTest from './Feedback/ProgressTest'
import PopconfirmTest from './Feedback/PopconfirmTest'
import SpinTest from './Feedback/SpinTest'
// import ResultTest from './Feedback/ResultTest';
import SkeletonTest from './Feedback/SkeletonTest'
import AnchorTest from './Other/AnchorTest'
import BackTopTest from './Other/BackTopTest'
import ConfigProviderTest from './Other/ConfigProviderTest'
import LocaleProviderTest from './Deprecated/LocaleProviderTest'
import { EmotionButton } from './Emotion'


function App() {
  return (
    <div className="App">
      <h1>emotion Components</h1>
      <EmotionButton>hi</EmotionButton>
      <EmotionButton type="primary">type primary</EmotionButton>
      <EmotionButton primary>primary</EmotionButton>
      <EmotionButton type="danger">type danger</EmotionButton>
      <EmotionButton danger>danger</EmotionButton>
      <hr/>

      <ButtonTest/>
      <hr/>
      {/* <IconTest />
      <hr /> */}
      <TypoTest/>
      <hr/>
      <GridTest/>
      <br/>
      <br/>
      <hr/>
      <LayoutTest/>
      <hr/>
      <AffixTest/>
      <hr/>
      <BreadcrumbTest/>
      <hr/>
      {/* <DropdownTest /> */}
      {/* <hr /> */}
      {/* <MenuTest /> */}
      {/* <hr /> */}
      <PaginationTest/>
      <hr/>
      <HeaderTest/>
      {/* <hr /> */}
      {/* <StepTest /> */}
      <hr/>
      <AvatarTest/>
      <hr/>
      <BadgeTest/>
      <hr/>
      <CommentTest/>
      <hr/>
      <CollapsTest/>
      <hr/>
      <CarouselTest/>
      <hr/>
      <CardTest/>
      <hr/>
      <CalendarTest/>
      <hr/>
      <DescriptionsTest/>
      <hr/>
      <EmptyTest/>
      <hr/>
      <ListTest/>
      <hr/>
      <PropoverTest/>
      <hr/>
      <StaticTest/>
      <hr/>
      <TreeTest/>
      <hr/>
      <TooltipTest/>
      <hr/>
      <TimelineTest/>
      <hr/>
      <TagTest/>
      <hr/>
      <TabTest/>
      <hr/>
      <TableTest/>
      <hr/>
      <AutoCompleteTest/>
      <hr/>
      <CheckboxTest/>
      <hr/>
      <CascaderTest/>
      <hr/>
      <DatePickerTest/>
      <hr/>
      <FormTest/>
      <hr/>
      <InputNumberTest/>
      <hr/>
      <InputTest/>
      <hr/>
      <MentionsTest/>
      <hr/>
      <RateTest/>
      <hr/>
      <RadioTest/>
      <hr/>
      <SwitchTest/>
      <hr/>
      <SliderTest/>
      <hr/>
      {/* <SelectTest /> */}
      {/* <TreeSelectTest /> */}
      {/* <TransferTest /> */}
      <TimePickerTest/>
      <hr/>
      <UploadTest/>
      <hr/>
      <AlertTest/>
      <hr/>
      <MessageTest/>
      <hr/>
      <NotificationTest/>
      <hr/>
      <ProgressTest/>
      <hr/>
      <PopconfirmTest/>
      <hr/>
      {/* <ResultTest /> */}
      <SpinTest/>
      <hr/>
      <SkeletonTest/>
      <hr/>
      <AnchorTest/>
      <hr/>
      <BackTopTest/>
      <hr/>
      <ConfigProviderTest/>
      <hr/>
      <LocaleProviderTest/>

    </div>
  )
}

export default App