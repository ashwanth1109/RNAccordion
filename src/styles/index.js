import { StyleSheet, Dimensions } from "react-native";

const SCHEMA_1 = ["#235968", "#4DCCC3", "#F7FFF7", "#FF6B6B", "#FFE66D"];

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export const colors = {
  Background: SCHEMA_1[2], // LIGHT MINT WHITE
  Text: SCHEMA_1[0], // DARK GREEN
  AccentP: SCHEMA_1[1], // LIGHT GREEN
  AccentS: SCHEMA_1[3], // RED
  AccentT: SCHEMA_1[4], // YELLOW

  Black: "#333",
  White: "#FCFCFC",
  BlackOverlay: "#33333350"
};

export const s = StyleSheet.create({
  // Flex Values
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },
  flex6: { flex: 6 },
  flex7: { flex: 7 },
  flex8: { flex: 8 },
  flex9: { flex: 9 },
  flex10: { flex: 10 },

  flexRow: { flexDirection: "row" },

  // Align & Justify Values
  center: { alignItems: "center", justifyContent: "center" },
  alignCenter: { alignItems: "center" },
  alignEnd: { alignItems: "flex-end" },
  justifyCenter: { justifyContent: "center" },
  justifyBetween: { justifyContent: "space-between" },

  // Width, Height & zIndex Values
  fullWidth: { width: SCREEN_WIDTH },
  widthP100: { width: "100%" },
  width15: { width: 15 },
  width20: { width: 20 },
  width30: { width: 30 },
  width40: { width: 40 },
  width60: { width: 60 },
  width80: { width: 80 },
  width100: { width: 100 },
  width150: { width: 150 },
  width250: { width: 250 },

  heightP100: { height: "100%" },
  height10: { height: 10 },
  height15: { height: 15 },
  height20: { height: 20 },
  height30: { height: 30 },
  height40: { height: 40 },
  height50: { height: 50 },
  height60: { height: 60 },
  height80: { height: 80 },
  height100: { height: 100 },
  height150: { height: 150 },
  height250: { height: 250 },

  zIndex1: { zIndex: 1 },
  zIndex2: { zIndex: 2 },

  elevation1: { elevation: 1 },
  elevation2: { elevation: 2 },
  elevation5: { elevation: 5 },
  elevation10: { elevation: 10 },

  // Absolute Positioning
  absolute: { position: "absolute" },
  top0: { top: 0 },
  left0: { left: 0 },
  bottom0: { bottom: 0 },
  right0: { right: 0 },

  topP8: { top: "8%" },
  topP90: { top: "90%" },
  bottomP10: { bottom: "10%" },
  bottomP92: { bottom: "92%" },
  bottomP90: { bottom: "90%" },

  // Padding & Margin
  paddingL10: { paddingLeft: 10 },
  paddingH10: { paddingHorizontal: 10 },
  paddingH20: { paddingHorizontal: 20 },
  paddingV10: { paddingVertical: 10 },
  paddingV30: { paddingVertical: 30 },
  paddingT20: { paddingTop: 20 },
  paddingT60: { paddingTop: 60 },
  paddingT80: { paddingTop: 80 },
  paddingR40: { paddingRight: 40 },
  paddingHP10: { paddingHorizontal: "10%" },

  marginT10: { marginTop: 10 },
  marginB5: { marginBottom: 5 },
  marginB10: { marginBottom: 10 },

  // Background Color Values
  bgBackground: { backgroundColor: colors.Background },
  bgText: { backgroundColor: colors.Text },
  bgAccentP: { backgroundColor: colors.AccentP },
  bgAccentS: { backgroundColor: colors.AccentS },
  bgAccentT: { backgroundColor: colors.AccentT },

  bgWhite: { backgroundColor: colors.White },
  bgBlackOverlay: { backgroundColor: colors.BlackOverlay },

  // Font Values
  fontColorBlack: { color: colors.Black },
  fontColorText: { color: colors.Text },
  fontColorBackground: { color: colors.Background },
  fontColorAccentP: { color: colors.AccentP },
  fontColorAccentS: { color: colors.AccentS },
  fontColorAccentT: { color: colors.AccentT },

  fontSize8: { fontSize: 8 },
  fontSize10: { fontSize: 10 },
  fontSize12: { fontSize: 12 },
  fontSize14: { fontSize: 14 },
  fontSize16: { fontSize: 16 },
  fontSize18: { fontSize: 18 },
  fontSize20: { fontSize: 20 },
  fontSize22: { fontSize: 22 },
  fontSize24: { fontSize: 24 },

  fontQuicksandMedium: { fontFamily: "quicksand-medium" },
  fontQuicksandBold: { fontFamily: "quicksand-bold" },
  fontQuicksandRegular: { fontFamily: "quicksand-regular" },

  // Border Values
  borderRadius10: { borderRadius: 10 },
  borderRadius20: { borderRadius: 20 },
  borderRadius30: { borderRadius: 30 },
  borderRadius40: { borderRadius: 40 },
  borderRadius50: { borderRadius: 50 },

  borderTopWidth1: { borderTopWidth: 1 },
  borderBottomWidth1: { borderBottomWidth: 1 },
  borderBottomWidth2: { borderBottomWidth: 2 },
  borderBottomWidth4: { borderBottomWidth: 4 },

  borderColorWhite: { borderColor: colors.White },
  borderColorText: { borderColor: colors.Text },
  borderColorAccentP: { borderColor: colors.AccentP },
  borderColorAccentT: { borderColor: colors.AccentT }
});

export const cs = {
  container: {
    flexOnly: [s.flex1],
    flexCenter: [s.flex1, s.center]
  },
  bigBlackFont: [s.fontColorBlack, s.fontSize20],

  cardView: {
    container: [
      s.bgBackground,
      s.widthP100,
      s.paddingT20,
      s.paddingHP10,
      s.elevation2
    ],
    circle: [
      s.width100,
      s.height100,
      s.borderRadius50,
      s.bgAccentS,
      s.zIndex1,
      s.center
    ],
    circleText: [s.fontColorBackground, s.fontSize20, s.fontQuicksandBold],
    block: [s.widthP100, s.marginT10],
    title: [s.fontColorText, s.fontSize24, s.fontQuicksandMedium]
  },

  button: {
    container: [s.flex1, s.center, s.bgText, s.borderRadius30],
    text: [s.fontQuicksandMedium, s.fontSize20, s.fontColorBackground]
  },
  shadeLayer: [
    s.absolute,
    s.top0,
    s.bottom0,
    s.left0,
    s.right0,
    s.bgBlackOverlay,
    s.zIndex1,
    s.borderRadius30
  ],
  shadeClick: [
    s.absolute,
    s.top0,
    s.bottom0,
    s.left0,
    s.right0,
    s.bgBlackOverlay,
    s.zIndex1
  ],

  // From Old Reference
  tabBar: {
    container: [
      s.absolute,
      s.widthP100,
      s.flex1,
      s.zIndex1,
      s.topP90,
      s.bottom0,
      s.flexRow,
      s.bgBackground,
      s.elevation10
    ],
    tab: [s.flex1],
    image: [s.marginB5],
    touchable: [s.flex1, s.center, s.bgWhite],
    label: [s.fontQuicksandBold, s.fontSize8]
  },
  homeTab: {
    container: [
      s.absolute,
      s.topP8,
      s.bottomP10,
      s.widthP100,
      s.bgWhite,
      s.marginB10
    ]
  },
  profileTab: {
    container: [s.absolute, s.topP8, s.bottomP10, s.widthP100, s.marginB10]
  },
  header1: {
    container: [
      s.absolute,
      s.widthP100,
      s.flex1,
      s.zIndex1,
      s.elevation5,
      s.flexRow,
      s.top0,
      s.bottomP90,
      s.bgWhite,
      s.center
    ],
    menu: [s.flex1, s.center, s.heightP100],
    menuIcon: [s.height20, s.width20],
    body: [s.flex6]
  },
  startCard: {
    container: [s.widthP100, s.height250, s.bgBackground, s.elevation2],
    title: [s.flexRow, s.paddingH20, s.flex1, s.alignEnd],
    titleIcon: [
      s.width100,
      s.height100,
      s.bgAccentS,
      s.borderRadius50,
      s.center
    ],
    titleLabel: [s.height100, s.flex1, s.justifyCenter, s.paddingH10],
    textIcon: [s.fontSize24, s.fontColorBackground, s.fontQuicksandRegular],
    textLabel: [s.fontSize20, s.fontColorText, s.fontQuicksandRegular],
    button: [
      s.width150,
      s.height50,
      s.bgAccentT,
      s.borderRadius30,
      s.center,
      s.flexRow
    ],
    playIcon: [s.width15, s.height15],
    playText: [
      s.fontColorBackground,
      s.fontSize14,
      s.fontQuicksandBold,
      s.paddingL10
    ]
  },
  title: {
    container: [s.widthP100, s.paddingH20],
    text: [s.fontQuicksandBold, s.fontSize20, s.fontColorText]
  },
  paragraph: {
    container: [s.widthP100, s.paddingH20],
    text: [s.fontQuicksandRegular, s.fontSize16, s.fontColorText]
  },
  listItem: {
    container: [
      s.widthP100,
      s.paddingH20,
      s.height100,
      s.flexRow,
      s.alignCenter,
      s.elevation2,
      s.bgBackground,
      s.borderBottomWidth2,
      s.borderTopWidth1,
      s.borderColorText
    ],
    icon: [s.width60, s.height60, s.borderRadius30, s.bgAccentS, s.center],
    iconText: [s.fontQuicksandBold, s.fontSize20, s.fontColorBackground],
    label: [s.flex1, s.paddingH10, s.justifyCenter],
    labelText: [s.fontQuicksandRegular, s.fontSize16, s.fontColorText],
    expanded: [s.widthP100, s.bgWhite, s.height250]
  },
  profileHeader: {
    container: [
      s.widthP100,
      s.height150,
      s.paddingH20,
      s.flexRow,
      s.alignCenter
    ],
    devImage: [s.width80, s.height80, s.borderRadius40],
    text: [s.fontQuicksandRegular, s.fontSize20, s.fontColorText, s.paddingH20],
    settings: [s.height30, s.width30]
  },
  tabPicker: {
    container: [s.widthP100, s.height60, s.bgBackground, s.flexRow],
    tab: [s.flex1, s.center],
    text: [s.fontColorText, s.fontSize16, s.fontQuicksandBold],
    selected: [s.borderBottomWidth4, s.borderColorText]
  },
  accordion: {
    header: [s.widthP100, s.height100, s.elevation10],
    element1: [s.heightP100, s.width100, s.center],
    element2: [s.flex1, s.justifyCenter],
    element3: [s.heightP100, s.width60, s.justifyCenter],
    idContainer: [
      s.height60,
      s.width60,
      s.borderRadius30,
      s.center,
      s.bgAccentS
    ],
    idText: [s.fontQuicksandMedium, s.fontSize20, s.fontColorBackground],
    titleText: [s.fontColorAccentS, s.fontSize16, s.fontQuicksandMedium],
    plusColor: colors.AccentS,
    body: [s.bgAccentT, s.widthP100],
    plusMinusContainer: [
      s.absolute,
      s.top0,
      s.right0,
      s.bottom0,
      s.left0,
      s.center
    ]
  },
  accordionOpen: {
    header: [s.widthP100, s.height100, s.elevation10],
    element1: [s.heightP100, s.width100, s.center],
    element2: [s.flex1, s.justifyCenter],
    element3: [s.heightP100, s.width60, s.justifyCenter],
    idContainer: [
      s.height60,
      s.width60,
      s.borderRadius30,
      s.center,
      s.bgBackground
    ],
    idText: [s.fontQuicksandMedium, s.fontSize20, s.fontColorAccentS],
    titleText: [s.fontColorBackground, s.fontSize16, s.fontQuicksandMedium],
    plusColor: colors.Background,
    body: [s.bgAccentT, s.widthP100],
    plusMinusContainer: [
      s.absolute,
      s.top0,
      s.right0,
      s.bottom0,
      s.left0,
      s.center
    ]
  },
  absoluteFlex: [s.absolute, s.top0, s.right0, s.bottom0, s.left0]
};
