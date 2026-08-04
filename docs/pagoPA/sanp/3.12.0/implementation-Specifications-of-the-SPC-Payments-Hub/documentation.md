---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/EnBg5c1okkV2J4KL0TcG/specifiche-attuative-del-nodo-dei-pagamenti-spc/documentazione
---

# Documentation

This chapter describes the conventions and processes adopted to manage the disclosure and changes of the documentation concerning the pagoPA platform.

Based on the following needs:

- to communicate with minimal effort both the resolution of interpretative issues and the introduction of new features;
- to coordinate with minimal effort the testing of new versions of the Implementation Specifications;
- to ensure the compatibility of new versions of the Implementation Specifications with previous ones for the time necessary to adapt the software, configurations, and Service Levels;

The change management process introduces:

- a method for encoding the versions of the Implementation Specifications that expresses the extent of the changes introduced in each new version;
- an update process that takes into account the gradual adaptation of software, configurations, and Service Levels;
- mechanisms to concisely describe and make easily consultable both the changes introduced in a new version and the changes planned for future versions.

## Disclosure <a href="#kqvi017bh9lm" id="kqvi017bh9lm"></a>

The documentation base for the pagoPA platform consists of various documents and integration materials, all available on the [pagoPA product website](https://www.pagopa.gov.it/).

## Version Encoding <a href="#bm4lew8oy7fl" id="bm4lew8oy7fl"></a>

Representing the extent of changes through version encoding makes it easy to communicate the nature of the changes made. This encoding adopts, adapting them to the circumstances, the principles of _semantic versioning_.

The rules that express the semantics of the encoding adopted are described below:

1. Each published document item is characterized by a version expressed as a numeric triplet: _Major.Minor.Patch_.
2. Once a versioned document has been released, its contents CANNOT be modified. Any modification MUST be released as a new version of the same document.
3. Each number of the triplet is a non-negative integer, whose increment represents the extent and meaning of the changes made to the text. The conventions on version numbers, and the way they change, communicate the overall meaning of what has been changed in the version advancement.
4. The _Patch_ version number is incremented only when changes are made that do not introduce new features but make the text fully usable by eliminating material errors or elements of ambiguity. Examples of such changes are: spelling corrections, adding examples or explanatory clarifications to the text, and even rewording an ambiguous and therefore unusable portion of the text. The Patch version is also incremented according to the following rules:
   - it is effective immediately;
   - it does not require counterparts to adapt their software or configuration.
5. The _Minor_ version number is incremented for changes that are backward-compatible with the previous version. The Minor version is also incremented when a new feature is introduced (or marked as deprecated), as long as it is non-critical and/or optional. The Minor version is also incremented according to the following rules:
   - the publication will be announced by a communication and accompanied by:
     - test cases;
     - configuration changes;
     - release plan;
     - deadlines for adaptation by counterparts;
   - It CANNOT include simultaneous Patch-level changes;
   - the Patch version MUST be reset to 0 when the Minor version is incremented.
6. The _Major_ version number is incremented in case of any non-backward-compatible change. The Major version is also incremented when a new feature is introduced (or marked as deprecated), provided it is not one that would only cause a Minor version increment. The Major version is also incremented according to the following rules:
   - the publication will be announced by a communication and accompanied by:
     - test cases;
     - configuration changes;
     - release plan;
     - deadlines for adaptation by counterparts;
   - It CANNOT include simultaneous Minor and Patch-level changes;
   - the Patch and Minor versions MUST be reset to 0 when the Major version is incremented.
7. Precedence refers to how versions are compared to one another when ordered. Precedence MUST be calculated by separating the identifiers in the following order: Major, Minor, Patch. Precedence is determined by the first difference when comparing each of these identifiers from left to right.
