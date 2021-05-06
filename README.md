
### WebdriverIO with Cucumber

This repository contains a collection of webdriverIO-v6 (Selenium - Node.js/JavaScript) projects and libraries that demonstrate how to use the tool and develop automation script using the Cucumber (v6.x) BDD framework. It uses the `chromedriver` NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

It support ES5 to ES8 (via babel-register) and uses Grunt to manage tasks. It generate Spec, JUNIT, Allure, JSON reporters as well.

### Installation

This project is tested on **Node v12.0.0** and above.  

you will need to install `npm install -g  grunt-cli` globally.

`JDK 1.8:` It is optional, install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else.

### Run

To execute the entire test suite in local development, you can use any one of the options mentioned below

`npm run test`.


### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files can be found in the `/test/config/` directory and all end with `*.conf.js`.  These can be called via the the cli.


### Logs  

Complete set of execution `logs` will be generated during the run time and can be found in the parent folder location /logs.

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

##### Spec

Test reporter, that prints detailed results to console.

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.

To generate and view an allure report locally, run `npm run allure-report`.

##### junit/xunit

The JUnit reporter helps you to create xml reports for your CI server. Add it to the reports array in the config file and define the directory where the xml files should get stored. webdriverIO will create an xml file for each instance under test and the filename will contain the browser and OS.

To generate and view an junit/xunit report locally, run `npm run junit-report`. 


##### features
Tests are place in `*.feature` files in the `/test/features/` directory. A typical test will look similar to this:
```
Feature: Performing a login

    As a user on the login page
    I want to register
    Because I want to login in landing page

    Background:
        Given I am on the login page

    Scenario Outline: Performing CREATE AN ACCOUNT operation with passing test data
        When I register with email <mailid> into the text box
        Then I should see the message <msg> on the account-creation page and register
        Then I should land on the account-landing page and check <username>
        When Logout and login again <email> <password>
        Then I should land on the account-landing page and check <username>
        
        
    Examples:
        |mailid| |msg| |username| |email| |password|
        |""yalensia947@boranora.com"| |"YOUR PERSONAL INFORMATION"| |aa zz| |"overmatche@wingkobabat.buzz"| |12345|

```

### Used Page Object Design Pattern

- MMM
