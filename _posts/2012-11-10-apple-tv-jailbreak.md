---
title: Apple TV jailbreak
author: micp
layout: post
permalink: /2012/11/apple-tv-jailbreak/
categories:
  - Apple TV
tags:
  - apple
  - apple tv
  - ios
  - jailbreak
  - seas0npass
---
# 

So I’ve finally got myself an Apple TV 2 after finding out you couldn’t jailbreak the v3 one! I picked one up on eBay for a good price which came with 5.1 installed.

If anyone has read up on these devices they’ll know what the “hockey puck” can do when it’s been jailbroken. You’ll also know that a device on 5.1 (iOS6) can’t be jailbroken. I knew this when I bought this off eBay but I also knew Apple where still signing the 5.0.2 firmware.

First thing I did was download the 5.0.2 ipsw and restore the device back to this firmware – then just use the [guide][1] here to jailbreak the device using Seas0nPass.

 [1]: http://www.appletvhacks.net/2012/06/06/how-to-jailbreak-apple-tv-2-5-0-2-ios-5-1-1-using-seas0npass-untethered/

Once I’d got the device jailbroken I then installed Nito TV. To do this you will first need to find out the IP address of your Apple TV. You can find this in settings > about.

Once you have that open terminal (or any other command line program) and enter the following:

{% highlight ruby %}

    ssh root@IPADDRESS

{% endhighlight %}

You should then be prompted for your password. The default password as for the majority of Apple devices is alpine. Once you’ve entered this you’ll get a little message which you just need to type yes to then press enter.

Now you should of SSH’d on to your device. First you’ll need to update all your packages. To do this type:

    apt-get update

Once that’s done type:

    apt-get install com.nito.nitoTV

This will then install Nito TV on your Apple TV. 

You can then go ahead and kill the session using:

    killall AppleTV

You should now be able to reconnect your Apple TV to your TV and see Nito TV is installed – this will allow you to install a number of other things – mostly importantly I think; XBMC.