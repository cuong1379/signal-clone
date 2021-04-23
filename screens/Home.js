import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Image,
} from "react-native";
import HeaderSection from "../components/HeaderSection";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ZocialIcon from "react-native-vector-icons/Zocial";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headerSectionColumn}>
        <HeaderSection style={styles.headerSection}></HeaderSection>
        <View style={styles.exploreTabs}>
          <View style={styles.rect2}>
            <Text style={styles.text}>Subscriptions</Text>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.text2}>Custom Feed</Text>
          </View>
        </View>
        <Text style={styles.recentlyVisited}>Recently visited subreddits</Text>
        <View style={styles.scrollAreaStack}>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.rect6}>
                <View style={styles.rect5}>
                  <Image
                    source={require("../assets/images/meo.png")}
                    resizeMode="cover"
                    style={styles.image}
                  ></Image>
                  <Text style={styles.text4}>r/Art</Text>
                  <Text style={styles.text7}>27.2k members</Text>
                </View>
              </View>
              <View style={styles.rect7}>
                <View style={styles.rect52}>
                  <Image
                    source={require("../assets/images/meo.png")}
                    resizeMode="cover"
                    style={styles.image2}
                  ></Image>
                  <Text style={styles.text42}>r/AskReddit</Text>
                  <Text style={styles.text72}>27.2k members</Text>
                </View>
              </View>
              <View style={styles.rect8}>
                <View style={styles.rect53}>
                  <Image
                    source={require("../assets/images/meo.png")}
                    resizeMode="cover"
                    style={styles.image3}
                  ></Image>
                  <Text style={styles.text43}>r/Jokes</Text>
                  <Text style={styles.text73}>27.2k members</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.communitiesWrapper}>
            <View style={styles.all}>
              <View style={styles.allIconRow}>
                <View style={styles.allIcon}>
                  <EntypoIcon name="bar-graph" style={styles.icon}></EntypoIcon>
                </View>
                <Text style={styles.allText}>All</Text>
              </View>
            </View>
            <Text style={styles.communities2}>COMMUNITIES</Text>
            <View style={styles.otherCommunities}>
              <View style={styles.rect14}>
                <View style={styles.rect15Row}>
                  <View style={styles.rect15}>
                    <MaterialCommunityIconsIcon
                      name="reddit"
                      style={styles.icon3}
                    ></MaterialCommunityIconsIcon>
                  </View>
                  <Text style={styles.text11}>r/announcements</Text>
                </View>
              </View>
              <View style={styles.rect16}>
                <View style={styles.rect17Row}>
                  <View style={styles.rect17}>
                    <MaterialCommunityIconsIcon
                      name="reddit"
                      style={styles.icon4}
                    ></MaterialCommunityIconsIcon>
                  </View>
                  <Text style={styles.text12}>r/AskReddit</Text>
                </View>
              </View>
              <View style={styles.rect18}>
                <View style={styles.rect19Row}>
                  <View style={styles.rect19}>
                    <MaterialCommunityIconsIcon
                      name="reddit"
                      style={styles.icon5}
                    ></MaterialCommunityIconsIcon>
                  </View>
                  <Text style={styles.text13}>r/Batman</Text>
                </View>
              </View>
              <View style={styles.rect20}>
                <View style={styles.rect21Row}>
                  <View style={styles.rect21}>
                    <MaterialCommunityIconsIcon
                      name="reddit"
                      style={styles.icon6}
                    ></MaterialCommunityIconsIcon>
                  </View>
                  <Text style={styles.text14}>r/Bandersnatch</Text>
                </View>
              </View>
              <View style={styles.rect22}>
                <View style={styles.rect23Row}>
                  <View style={styles.rect23}>
                    <ZocialIcon
                      name="android"
                      style={styles.icon7}
                    ></ZocialIcon>
                  </View>
                  <Text style={styles.text15}>r/Android</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.headerSectionColumnFiller}></View>
      <Footer style={styles.footer}></Footer>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
  },
  headerSection: {
    height: 60,
  },
  exploreTabs: {
    height: 48,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  rect2: {
    width: 158,
    alignSelf: "stretch",
    borderColor: "#026bbd",
    borderWidth: 0,
    borderBottomWidth: 3,
    justifyContent: "center",
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,

    alignSelf: "center",
  },
  rect3: {
    width: 163,
    alignSelf: "stretch",
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,

    marginTop: 14,
    alignSelf: "center",
  },
  recentlyVisited: {
    color: "#808080",
    fontSize: 16,
    marginTop: 18,
    marginLeft: 22,
  },
  scrollArea: {
    top: 0,
    width: 360,
    height: 143,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    left: 0,
  },
  scrollArea_contentContainerStyle: {
    width: 516,
    height: 143,
    flexDirection: "row",
    alignItems: "center",
  },
  rect6: {
    width: 156,
    height: 128,
    marginLeft: 16,
    flexDirection: "row",
  },
  rect5: {
    backgroundColor: "rgba(100,85,85,0.14)",
    borderRadius: 10,
    width: 156,
  },
  image: {
    width: 156,
    height: 64,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text4: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,

    letterSpacing: 1,
    marginTop: 2,
    marginLeft: 58,
  },
  text7: {
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    marginTop: 8,
    marginLeft: 44,
  },
  rect7: {
    width: 156,
    height: 128,
    marginLeft: 16,
    flexDirection: "row",
  },
  rect52: {
    backgroundColor: "rgba(100,85,85,0.14)",
    borderRadius: 10,
    width: 156,
  },
  image2: {
    width: 156,
    height: 64,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text42: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,

    letterSpacing: 1,
    marginTop: 2,
    marginLeft: 40,
  },
  text72: {
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    marginTop: 7,
    marginLeft: 44,
  },
  rect8: {
    width: 156,
    height: 128,
    marginLeft: 16,
    flexDirection: "row",
  },
  rect53: {
    backgroundColor: "rgba(100,85,85,0.14)",
    borderRadius: 10,
    width: 156,
  },
  image3: {
    width: 156,
    height: 64,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text43: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,

    letterSpacing: 1,
    marginTop: 2,
    marginLeft: 58,
  },
  text73: {
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    marginTop: 10,
    marginLeft: 44,
  },
  communitiesWrapper: {
    top: 139,
    left: 22,
    width: 290,
    height: 347,
    position: "absolute",
    justifyContent: "space-around",
  },
  all: {
    width: 62,
    height: 27,
    flexDirection: "row",
  },
  allIcon: {
    width: 26,
    height: 27,
    backgroundColor: "#ff4500",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
  },
  allText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,

    marginLeft: 12,
    marginTop: 3,
  },
  allIconRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
  },
  communities2: {
    color: "#7f8182",
    fontSize: 14,
  },
  otherCommunities: {
    width: 218,
    height: 238,
    justifyContent: "space-around",
  },
  rect14: {
    height: 30,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  rect15: {
    width: 30,
    height: 30,
    backgroundColor: "#ff4500",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
  },
  text11: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,

    marginLeft: 16,
    marginTop: 7,
  },
  rect15Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 45,
  },
  rect16: {
    height: 30,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  rect17: {
    width: 30,
    height: 30,
    backgroundColor: "#ff4500",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
  },
  text12: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,

    marginLeft: 16,
    marginTop: 7,
  },
  rect17Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 88,
  },
  rect18: {
    height: 30,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  rect19: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(236,27,12,1)",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
  },
  text13: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,

    marginLeft: 16,
    marginTop: 7,
  },
  rect19Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 104,
  },
  rect20: {
    height: 30,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  rect21: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
  },
  text14: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,

    marginLeft: 16,
    marginTop: 7,
  },
  rect21Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 60,
  },
  rect22: {
    height: 30,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  rect23: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(169,203,8,1)",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
  },
  text15: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,

    marginLeft: 16,
    marginTop: 7,
  },
  rect23Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 105,
  },
  scrollAreaStack: {
    width: 360,
    height: 486,
    marginTop: 13,
  },
  headerSectionColumn: {
    marginTop: 22,
  },
  headerSectionColumnFiller: {
    flex: 1,
  },
  footer: {
    height: 50,
  },
});
