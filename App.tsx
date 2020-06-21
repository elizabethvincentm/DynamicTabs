import React from 'react'
import { SafeAreaView, View, Text, ScrollView } from 'react-native'
import { DynamicTabs } from './components'
import { Styles } from './Styles'
import { OtherComponent } from './components/OtherComponent'

const App = () => {
  const sampleTextStyle = { paddingTop: 20, fontSize: 16, lineHeight: 24 }
  //dummy data
  const tabData = {
    config: [
      {
        title: 'JavaScript',
        component: () => (
          <Text style={sampleTextStyle}>
            JavaScript is light weighed, interpreted and plays a major role in
            front-end development. Even some of the major social media platforms
            believe that JavaScript provides an easy way to create interactive
            web pages smoothly and is career-driven. JavaScript is most
            preferred because of its compatibility with all the major browsers
            and is really flexible with the syntax it holds. Being a Front-end
            language, JavaScript is also used on the server-side through
            Node.js. Above all make JavaScript loveliest programming language
            among the beginners.
          </Text>
        ),
      },
      {
        title: ' Python',
        component: () => (
          <Text style={sampleTextStyle}>
            Python is one of the general purpose, user-friendly programming
            language here on my list. What makes it so? Like Java, Python syntax
            is clear, intuitive and almost similar to the English language.
            Python’s “object-based” subset is somewhere similar to JavaScript.
          </Text>
        ),
      },
      {
        title: 'Java',
        component: () => (
          <Text style={sampleTextStyle}>
            Java is highly cross-platform compatible or platform independent.
            Since you can code anywhere (I mean on all devices), compile into
            low-level machine code, and finally, execute on any platform using
            JVM – Java Virtual Machine (which is platform dependent). Java forms
            the base for the Android operating system and opted around 90%
            fortune 500 companies for making a variety of back-end applications.
            I would not hesitate for taking the biggest sensation Apache Hadoop
            data processing, run by Amazon Web Services and Windows Azure.
          </Text>
        ),
      },
      {
        title: 'C/CPP',
        component: () => (
          <Text style={sampleTextStyle}>
            C has been the parent language of a handful; some are either derived
            from C or inspired by its syntax, constructs, and paradigms,
            including Java, Objective-C, and C#. Even, nowadays, it is seen,
            whenever there is a need to build high-performance applications, C
            remains the most popular choice. Linux OS is C based. And CPP is the
            hybrid version of C. C++ is an object-oriented programming language
            and which is built on C; therefore it is preferred over others for
            designing higher-level applications. C++ is seeing as more
            performing than dynamically typed languages because the code is
            type-checked before it is executed on real grounds. Core areas of
            developments are Virtual Reality, gaming, computer graphics etc.
          </Text>
        ),
      },
      {
        title: 'PHP',
        component: () => (
          <Text style={sampleTextStyle}>
            PHP stands for Hypertext Preprocessor, is a general-purpose
            programming language. Clearly, PHP is a scripting language, which
            runs on a server, and it is used to create web pages written in
            HTML. It is popular because it is free, cheap, easy to set up and
            simple to use for new programmers. PHP is a very strong option for
            web developers around the globe. It is widely used to create dynamic
            web page content, and images used on websites. It’s hitting on
            number #5 because of its broad range of usage. Also, PHP is well
            dressed for WordPress CMS (Content Management System).
          </Text>
        ),
      },
      {
        title: 'C#',
        component: () => (
          <Text style={sampleTextStyle}>
            C-sharp is a powerful, object-oriented programming language
            developed by Microsoft in 2000. C-sharp is utilized in developing
            desktop applications and more recently, Windows 8/10 applications
            and requires a .NET framework to function. Microsoft developed C# as
            a rival to Java. Actually, Sun did not want the interference of
            Microsoft to make changes in Java. So, it was created. C# has a
            variety of features which makes it easier to learn for the
            beginners. The code is consistent, and logical as compared to C++.
          </Text>
        ),
      },
    ],
    maxTabsToShow: 1,
  }

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <OtherComponent />
        <DynamicTabs
          config={tabData.config}
          maxTabsToShow={tabData.maxTabsToShow}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
export default App
