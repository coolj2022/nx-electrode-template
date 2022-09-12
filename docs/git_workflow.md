# Git Workflow

This is an overview of the source control management workflow. This repository follows the [trunk based development](https://trunkbaseddevelopment.com/) branching model.

---

## Branch Naming Conventions

Before making updates, create a new branch to do your work.
Branches are named `<subapp-name>/<category>/<tracker-number>/<description>`

Be sure to use [`kebab-case`](https://medium.com/javascript-in-plain-english/convert-string-to-different-case-styles-snake-kebab-camel-and-pascal-case-in-javascript-da724b7220d7) in the subapp name and feature description.

Examples:

- core/doc/MECOE-1711/pr-standards
- chatbot/feat/JIRA-123/new-button

### Subapp name

Subapp name is located in front of the branch name. Use `core` or mini app name here.

### Category

Use one of the next defined values:

- `feat` for creating or improving a feature.
- `bug` for fixing a bug in an existing feature.
- `test` for adding tests or improving test coverage.
- `chore` for updating tasks that have no production code change.
- `doc` for improving READMEs or other Markdown documents.
- `junk` for experimental features not to be merged.

### Tracker Number

This is the Jira ticket number assigned to the feature or bug for the branch.

### Description

This is the short description for the branch.

---

## Commit Messages

We've integrated ESLint, Prettier, Commitizen and Husky git hooks, to ensure our codebase is consistent and easy to work with.

### Commitizen

Commitizen is a tool that is useful in helping to ensure that git commit messages are formatted in a consistent way.
An interactive prompt will guide you through the authoring of the commit message.

Simply use `yarn cz` instead of git commit when committing.

[![Add and commit with Commitizen](./images/add-commit.png)](./images/add-commit.png)

### Husky

Husky is a great tool for configuring git hooks, which can automatically lint code and commit messages, run unit tests (and so much more) before you push to a remote repository. This helps to ensure no bad code gets into the repository because someone forgot to manually run the lint or test commands manually first.

There are 2 husky hooks we defined:

- `commit-msg`

  This hook is called after the user enters a commit message. We configured this hook so it will ask [commitlint](https://github.com/conventional-changelog/commitlint) to lint our commit message. To test this works in a terminal, we simply change a file, and try to commit it with a non conventional commit message.

  ```
  $ git add .
  $ git commit -m "Set up Husky and commitlint"
  ```

  The operation should be failed.

  If you run the following commit instead it should work:

  ```
  $ git commit -m 'feat: set up husky and commitlint'
  ```

- `pre-commit`

  It wires up the Husky pre-commit hook to call `lint-staged`. When we have any ESLint errors, or Prettier formatting issues in our staged files (and we didn't use IDE extensions to automatically reformat on file save etc), then before the commit task runs, our files will checked and automatically fixed if possible.

## Rebase before you make the PR, if needed

Unless there is a good reason not to rebase - typically because more than one person has been working on the branch - it is often a good idea to rebase your branch to tidy up before submitting the PR.

```
$ git pull --rebase origin main
```

---

## Creating a Pull Request

These steps should be done prior to requesting a review for the pull request.

- Git log should be a story, at least have some sense of chronological order and hints regarding what is being changed.
- Try to keep PR to be manageable and NOT HUGE.
- Set Reviewers
- Set Assignees - Make yourself the assignee.
- Provide a high-level description that describes what the change is doing to trying to resolve.

### Request Review

The process for requesting a review will vary, depending on your team. Some examples are:

- Posting the PR GH link in the Teams channel
- Sending the PR GH link directly to other members of your team
- Clicking on the gear next to in the `Reviewers` section on GH and adding team members.

### Merging a Pull Request

When a pull request you submitted has received one or more +1 comments and its tests all pass, it's ready to merge into master.

- Squash commits when merging
- Wait for CI to complete
- Make sure feature branch is deleted after merge
