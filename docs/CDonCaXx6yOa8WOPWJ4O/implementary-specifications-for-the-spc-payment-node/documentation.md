# Documentation

This chapter describes the agreements and processes adopted for managing the disclosure and changes to the documents concerning the pagoPA platform.

Based on the following requirements:

* communicate with minimum effort both the resolution of interpretation problems as well as the introduction of new functions;
* coordinate with minimum effort the testing of new versions of the Implementing Specifications;
* guarantee compatibility of the new versions of the Implementing Specifications with the previous ones for a period of time necessary for upgrading the software, the configurations and the service levels;

The change management process introduces:

* a method for coding the versions of the implementing specifications that expresses the scope of the changes introduced to each new version;
* an update process that accounts for the gradual upgrading of the software, configurations and service levels;
* mechanisms for describing in a clear manner and making information easy to consult regarding both the changes made to a new version as well as the changes planned for future versions.

## Disclosure <a href="#kqvi017bh9lm" id="kqvi017bh9lm"></a>

The documental basis of the pagoPA platform is comprised of various documents and material for integration, all of which is available on the [pagoPA product website](https://www.pagopa.gov.it/).

## Coding of the versions <a href="#bm4lew8oy7fl" id="bm4lew8oy7fl"></a>

Representing the scope of changes by means of coding the versions make it possible to communicate the changes that were made in a simple manner. This coding integrates the principles of _semantic versioning_, adapting then to the circumstances.

The rules that express the semantics of the adopted coding are described below:

1. Every published documental element is characterized by a version expressed by a numeric triplet: _Major.Minor.Patch_.
2. Once a versioned document has been released, its content MAY NOT be changed. Every change MUST be released as a new version of the same document.
3. Each number of the triplet is a positive integer greater than or equal to zero, whose increase represents the scope and meaning of the changes made to the test. The conventions on version numbers and the way they change communicate the overall meaning regarding what was changed in the advancement of the version.
4. The _Patch_ version number is increased only if changes were made that do not introduce new aspects to the text but make it fully usable, eliminating material errors or aspects of ambiguity. Examples of this type of change are: spelling corrections, the addition of examples or explanatory text or even the reformulation of a portion of text that was ambiguous and therefore unusable. The Patch version is increased also according to the following rules:
   * the efficacy is immediate;
   * it does not require the counterparties to adapt the software or the configuration.
5. The _Minor_ version number is increased following changes that are backwards compatible with the previous version. The Minor version is increased also if a new function is introduced (or indicated as deprecated), providing that it is not critical and/or is optional. The Minor version is increased also according to the following rules:
   * the publication will be announced with a communication and accompanied by:
     * test cases;
     * changes to the configuration;
     * a release plan;
     * deadlines for adaptation by the counterparties;
   * They CANNOT also include changes on a Patch level;
   * the Patch version MUST be reset to 0 when the Minor version is increased.
6. The _Major_ version number is increased in the case of any change that is not backwards compatible. The Major version is increased also if a new function is introduced (or indicated as deprecated), providing that it does not cause only a Minor advancement. The Major version is increased also according to the following rules:
   * the publication will be announced with a communication and accompanied by:
     * test cases;
     * changes to the configuration;
     * a release plan;
     * deadlines for adaptation by the counterparties;
   * They CANNOT also include changes on a Minor and Patch level;
   * the Patch and Minor versions MUST be reset to 0 when the Major version is increased.
7. Precedence refers to how the versions are compared with each other when put in order. Precedence MUST be calculated separating the identifiers in the following order: Major, Minor, Patch. Precedence is determined by the first discrepancy when comparing each of these identifiers from the left to the right.