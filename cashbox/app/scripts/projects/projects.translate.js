'use strict';

angular.module('cashbox')
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      'PROJECTS': {
        'ACTIONS': {
          'ADD': 'Add Project',
          'EDIT': 'Edit Project',
          'DELETE': 'Delete Project'
        },
        'PROJECT-ADD-EDIT-DIALOG': {
          'TITLE': 'Project',
          'SAVE': 'Save Project',
          'DELETE': '@:PROJECTS.ACTIONS.DELETE'
        },
        'PROJECT-DELETE-DIALOG': {
          'TITLE': 'Delete Project',
          'CONFIRM': 'Are you sure you want to delete this project?'
        },
        'FIELDS': {
          'NAME': 'Name',
          'SELECT-PROJECT-PLACEHOLDER': 'Select Project',
          'INCOME': 'Income',
          'EXPENSES': 'Expenses',
          'DIFFERENCE': 'Difference'
        },
        'PROJECTS-GRID': {
          'NAME': 'Project Name'
        }

      }
    });

    $translateProvider.translations('de', {
		'PROJECTS': {
			'ACTIONS': {
				'ADD': 'Projekt hinzufügen',
				'EDIT': 'Bearbeiten',
				'DELETE': 'Projekt löschen'
			},
			'PROJECT-ADD-EDIT-DIALOG': {
				'TITLE': 'Projekt',
				'SAVE': 'Projekt speichern',
				'DELETE': '@:PROJECTS.ACTIONS.DELETE'
			},
			'PROJECT-DELETE-DIALOG': {
				'TITLE': 'Projekt löschen',
				'CONFIRM': 'Sind Sie sicher, dass Sie dieses Projekt löschen möchten?'
			},
			'FIELDS': {
				'NAME': 'Name',
				'SELECT-PROJECT-PLACEHOLDER': 'Projekt wählen',
				'INCOME': 'Einnahmen',
				'EXPENSES': 'Ausgaben',
				'DIFFERENCE': 'Differenz'
			},
			'PROJECTS-GRID': {
				'NAME': 'Projektname'
			}
		}
    });
  });
