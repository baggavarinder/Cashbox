'use strict';

angular.module('cashbox')
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      'ACCOUNTS': {
        'ACTIONS': {
          'ADD': 'Add New Account',
          'EDIT': 'Edit Account',
          'DELETE': 'Delete Account'
        },
        'ACCOUNT-ADD-EDIT-DIALOG': {
          'TITLE': 'Account',
          'SAVE': 'Save Account',
          'DELETE': '@:ACCOUNTS.ACTIONS.DELETE'
        },
        'ACCOUNT-DELETE-DIALOG': {
          'TITLE': 'Delete Account',
          'CONFIRM': 'Are you sure you want to delete this account?'
        },
        'FIELDS': {
          'NAME': 'Name',
          'TYPE' : 'Type',
          'SELECT-ACCOUNT-PLACEHOLDER': 'Select Account'
        },
        'TOTAL-BALANCE': 'Total Balance'
      }
    });

    $translateProvider.translations('de', {
      'ACCOUNTS': {
			'ACTIONS': {
				'ADD': 'Neues Konto hinzufügen',
				'EDIT': 'Konto bearbeiten',
				'DELETE': 'Account Löschen'
			},
			'ACCOUNT-ADD-EDIT-DIALOG': {
				'TITLE': 'Konto',
				'SAVE': 'Sparen Sie Konto',
				'DELETE': '@:ACCOUNTS.ACTIONS.DELETE'
			},
			'ACCOUNT-DELETE-DIALOG': {
				'TITLE': 'Account Löschen',
				'CONFIRM': 'Sind Sie sicher, dass Sie möchten, um dieses Konto löschen?'
			},
			'FIELDS': {
				'NAME': 'Name',
				'TYPE' : 'Art',
				'SELECT-ACCOUNT-PLACEHOLDER': 'Wählen Sie Konto'
			},
			'TOTAL-BALANCE': 'Total Balance'
		}
    });
  });
