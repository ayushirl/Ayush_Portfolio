import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  searchSkills,
  validateEmail,
  validateContactForm,
  PROJECTS,
  SKILL_CATEGORIES
} from './portfolio-data';

test('filterProjects returns all projects when category is "all"', () => {
  const allProjects = filterProjects(PROJECTS, 'all');
  assert.equal(allProjects.length, PROJECTS.length);
});

test('filterProjects correctly filters by category', () => {
  const openSourceProjects = filterProjects(PROJECTS, 'opensource');
  assert.ok(openSourceProjects.length > 0);
  assert.ok(openSourceProjects.every(p => p.category === 'opensource'));

  const fullstackProjects = filterProjects(PROJECTS, 'fullstack');
  assert.ok(fullstackProjects.length > 0);
  assert.ok(fullstackProjects.every(p => p.category === 'fullstack'));
});

test('searchSkills filters skills matching search query case-insensitively', () => {
  const reactSearch = searchSkills(SKILL_CATEGORIES, 'react');
  assert.ok(reactSearch.length > 0);
  const foundReact = reactSearch.some(cat =>
    cat.skills.some(s => s.name.toLowerCase().includes('react'))
  );
  assert.ok(foundReact);

  const emptySearch = searchSkills(SKILL_CATEGORIES, '');
  assert.equal(emptySearch.length, SKILL_CATEGORIES.length);

  const nonExistent = searchSkills(SKILL_CATEGORIES, 'xyz999nonexistent');
  assert.equal(nonExistent.length, 0);
});

test('validateEmail validates email addresses correctly', () => {
  assert.equal(validateEmail('byyayush@gmail.com'), true);
  assert.equal(validateEmail('test.developer+work@domain.co'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('user@domain'), false);
});

test('validateContactForm catches missing or invalid fields', () => {
  const emptyForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  const errors = validateContactForm(emptyForm);
  assert.ok(errors.name);
  assert.ok(errors.email);
  assert.ok(errors.subject);
  assert.ok(errors.message);

  const validForm = {
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    subject: 'Software Engineer Opportunity',
    message: 'Hello Ayush, we loved your GitHub profile and would love to connect about an open role!'
  };
  const validErrors = validateContactForm(validForm);
  assert.equal(Object.keys(validErrors).length, 0);
});
