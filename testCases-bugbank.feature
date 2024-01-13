Feature: Money Transfer Feature

    URL: https://bugbank.netlify.app/

    Scenario: Register two new accounts with balance
        Given the BugBank application is open
        When I register a new account with email "teste@teste.com" and initial balance "$100,00"
        And I register another account with email "teste@teste1.com" and initial balance "$50,00"
        Then both accounts should be successfully created with the specified balances

    Scenario: Perform login
        Given the BugBank application is open
        When I log in with email "teste@teste.com" e password "1234"
        Then I should be successfully logged into the application

    Scenario: Money transfer from account 1 to account 2
        Given I am logged into the BugBank application with email "teste@teste.com"
        When I transfer "$30" from account "725-3" to account "300-3"
        Then the transfer should be successful
        And the balance in account "725-3' should be "$70"
        And the balance in account "300-3" should be "$80"

    Scenario: Money transfer from account 1 to account 2 invalid
        Given I am logged into the BugBank application with email "teste@teste.com"
        When I transfer "$30" from account "725-3" to account "000-0"
        Then display message "Conta inválida ou inexistente"
        And I log out of the application


    Scenario: Check balance in all accounts
        Given I am logged into the BugBank application with email "teste@teste.com"
        When I check the balance in account "725-3"
        Then the balance in account "725-3" should be "$70"
        And I log out of the application

        Given I am logged into the BugBank application with email "teste@teste1.com"
        When I check the balance in account "300-3"
        Then the balance in account "300-3" should be "$80"
        And I log out of the application

    Scenario: Check extract in account
        Given I am logged into the BugBank application with email "teste@teste.com"
        When I check the extract in account "725-3"
        Then the extract in account "725-3" should be "$70"
        And I log out of the application