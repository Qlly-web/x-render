import checkboxes from './checkboxes';
import color from './color';
import date from './date';
import dateRange from './dateRange';
import list from './list';
import map from './map';
import multiSelect from './multiSelect';
import radio from './radio';
import select from './select';
import slider from './slider';
import upload from './upload';
import ImageInput from './imageInput';
import urlInput from './urlInput';
import Html from './html';
import {
  InputNumber,
  Checkbox,
  Switch,
  Input,
  Rate,
  TreeSelect,
  Cascader,
} from 'antd';
import { createWidget } from '../../createWidget';

const { TextArea } = Input;

const FrNumber = createWidget(({ style }) => ({
  style: { width: '100%', ...style },
}))(InputNumber);

const FrSwitch = createWidget(({ style }) => ({
  style: { marginTop: 5, ...style },
}))(Switch);

const FrTextArea = createWidget(({ autoSize }) => ({
  autoSize: autoSize ? autoSize : { minRows: 3 },
}))(TextArea);

const FrTreeSelect = ({ style, ...rest }) => (
  <TreeSelect style={{ width: '100%', ...style }} {...rest} />
);

const FrCascader = ({ style, ...rest }) => (
  <Cascader style={{ width: '100%', ...style }} {...rest} />
);

export const widgets = {
  input: Input,
  checkbox: Checkbox,
  checkboxes, // checkbox多选
  color,
  date,
  dateRange,
  imageInput: ImageInput,
  url: urlInput,
  list,
  map,
  multiSelect, // 下拉多选
  number: FrNumber,
  radio,
  select,
  slider, // 带滚条的number
  switch: FrSwitch,
  textarea: FrTextArea,
  upload,
  html: Html,
  rate: Rate,
  treeSelect: FrTreeSelect,
  cascader: FrCascader,
};

export const defaultWidgetNameList = Object.keys(widgets);
