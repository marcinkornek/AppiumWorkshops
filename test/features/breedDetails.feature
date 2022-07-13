Feature: Navigating to breed details

  Scenario Outline: As a user, I can navigate to breed details

    Given I am on the home page
    Then I see breeds list
    When I click <breedName> breed tile
    Then I am on the breed details page
    Then I should see <breedName> breed title
    Then I should see breed description

  Examples:
    | breedName |
    | "Abyssinian" |
    | "Balinese" |
