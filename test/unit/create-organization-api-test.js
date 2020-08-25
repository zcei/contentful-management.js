import createOrganizationApi, {
  __RewireAPI__ as createOrganizationApiRewireApi,
} from '../../lib/create-organization-api'
import {
  cloneMock,
  appDefinitionMock,
  organizationMembershipMock,
  spaceMembershipMock,
  teamMembershipMock,
  teamSpaceMembershipMock,
  setupEntitiesMock,
  organizationInvitationMock,
  teamMock,
  userMock,
} from './mocks/entities'
import setupHttpMock from './mocks/http'
import {
  makeGetEntityTest,
  makeGetCollectionTest,
  makeCreateEntityTest,
  makeEntityMethodFailingTest,
} from './test-creators/static-entity-methods'
import { afterEach, describe, test } from 'mocha'
import { expect } from 'chai'

import { __RewireAPI__ as createEnvironmentApiRewireApi } from '../../lib/create-environment-api'

function setup(promise) {
  const entitiesMock = setupEntitiesMock(createOrganizationApiRewireApi)
  const httpMock = setupHttpMock(promise)
  const api = createOrganizationApi({ http: httpMock })
  return {
    api,
    httpMock,
    entitiesMock,
  }
}

describe('A createOrganizationApi', () => {
  afterEach(() => {
    createEnvironmentApiRewireApi.__ResetDependency__('entities')
  })

  test('API call getAppDefinition', async () => {
    return makeGetEntityTest(setup, {
      entityType: 'appDefinition',
      mockToReturn: appDefinitionMock,
      methodToTest: 'getAppDefinition',
    })
  })

  test('API call getAppDefinition fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getAppDefinition',
    })
  })

  test('API call getAppDefinitions', async () => {
    return makeGetCollectionTest(setup, {
      entityType: 'appDefinition',
      mockToReturn: appDefinitionMock,
      methodToTest: 'getAppDefinitions',
    })
  })

  test('API call getAppDefinitions fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getAppDefinitions',
    })
  })

  test('API call getUser', async () => {
    return makeGetEntityTest(setup, {
      entityType: 'user',
      mockToReturn: userMock,
      methodToTest: 'getUser',
    })
  })

  test('API call getUser fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getUser',
    })
  })

  test('API call getUsers', async () => {
    return makeGetCollectionTest(setup, {
      entityType: 'user',
      mockToReturn: userMock,
      methodToTest: 'getUsers',
    })
  })

  test('API call getUsers fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getUsers',
    })
  })

  test('API call createAppDefinition', async () => {
    return makeCreateEntityTest(setup, {
      entityType: 'appDefinition',
      mockToReturn: appDefinitionMock,
      methodToTest: 'createAppDefinition',
    })
  })

  test('API call createAppDefinition fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'createAppDefinition',
    })
  })

  test('API call getOrganizationMembership', async () => {
    return makeGetEntityTest(setup, {
      entityType: 'organizationMembership',
      mockToReturn: organizationMembershipMock,
      methodToTest: 'getOrganizationMembership',
    })
  })

  test('API call getOrganizationMembership fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getOrganizationMembership',
    })
  })

  test('API call getOrganizationMemberships', async () => {
    return makeGetCollectionTest(setup, {
      entityType: 'organizationMembership',
      mockToReturn: organizationMembershipMock,
      methodToTest: 'getOrganizationMemberships',
    })
  })

  test('API call getOrganizationMemberships fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getOrganizationMemberships',
    })
  })

  test('API call getOrganizationSpaceMembership', async () => {
    return makeGetEntityTest(setup, {
      entityType: 'spaceMembership',
      mockToReturn: spaceMembershipMock,
      methodToTest: 'getOrganizationSpaceMembership',
    })
  })

  test('API call getOrganizationSpaceMembership fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getOrganizationSpaceMembership',
    })
  })

  test('API call getOrganizationInvitation', async () => {
    return makeGetEntityTest(setup, {
      entityType: 'organizationInvitation',
      mockToReturn: organizationInvitationMock,
      methodToTest: 'getOrganizationInvitation',
    })
  })

  test('API call getOrganizationInvitation fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getOrganizationInvitation',
    })
  })

  test('API call createOrganizationInvitation', async () => {
    return makeCreateEntityTest(setup, {
      entityType: 'organizationInvitation',
      mockToReturn: organizationInvitationMock,
      methodToTest: 'createOrganizationInvitation',
    })
  })

  test('API call createOrganizationInvitation fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'createOrganizationInvitation',
    })
  })

  test('API call getSpaceOrganizationMemberships', async () => {
    return makeGetCollectionTest(setup, {
      entityType: 'spaceMembership',
      mockToReturn: spaceMembershipMock,
      methodToTest: 'getOrganizationSpaceMemberships',
    })
  })

  test('API call getOrganizationSpaceMemberships fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getOrganizationSpaceMemberships',
    })
  })

  test('API call createTeam', async () => {
    return makeCreateEntityTest(setup, {
      entityType: 'team',
      mockToReturn: teamMock,
      methodToTest: 'createTeam',
    })
  })

  test('API call createTeam fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'createTeam',
    })
  })

  test('API call getTeam', async () => {
    return makeGetEntityTest(setup, {
      entityType: 'team',
      mockToReturn: teamMock,
      methodToTest: 'getTeam',
    })
  })

  test('API call getTeam fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getTeam',
    })
  })

  test('API call getTeams', async () => {
    return makeGetCollectionTest(setup, {
      entityType: 'team',
      mockToReturn: teamMock,
      methodToTest: 'getTeams',
    })
  })

  test('API call getTeams fails', async () => {
    return makeEntityMethodFailingTest(setup, {
      methodToTest: 'getTeams',
    })
  })

  test('API call createTeamMembership', async () => {
    const { api, entitiesMock } = setup(Promise.resolve({}))
    entitiesMock['teamMembership'][`wrapTeamMembership`].returns(teamMembershipMock)

    return api['createTeamMembership']({
      admin: true,
      organizationMembershipId: 'id',
    }).then((r) => {
      expect(r).eql(teamMembershipMock)
    })
  })

  test('API call getTeamMembership', async () => {
    const { api, entitiesMock } = setup(Promise.resolve({}))
    entitiesMock['teamMembership'][`wrapTeamMembership`].returns(teamMembershipMock)
    return api['getTeamMembership']('teamid', 'eid').then((r) => {
      expect(r).eql(teamMembershipMock)
    })
  })

  test('API call getTeamMembership fails', async () => {
    const error = cloneMock('error')
    const { api } = setup(Promise.reject(error))

    return api['getTeamMembership']('teamid', 'eid').then(
      () => {},
      (r) => {
        expect(r.name).equals('404 Not Found')
      }
    )
  })

  test('API call getTeamMemberships', async () => {
    const { api, entitiesMock } = setup(Promise.resolve({}))
    entitiesMock['teamMembership'][`wrapTeamMembershipCollection`].returns({
      total: 100,
      skip: 0,
      limit: 10,
      items: [teamMembershipMock],
    })
    return api['getTeamMemberships']({ teamId: 'teamid' }).then((r) => {
      expect(r).eql({
        total: 100,
        skip: 0,
        limit: 10,
        items: [teamMembershipMock],
      })
    })
  })

  test('API call getTeamMemberships fails', async () => {
    const error = cloneMock('error')
    const { api } = setup(Promise.reject(error))

    return api['getTeamMembership']({ teamId: 'teamid' }).then(
      () => {},
      (r) => {
        expect(r.name).equals('404 Not Found')
      }
    )
  })

  test('API call getTeamMemberships for all teams', async () => {
    const { api, entitiesMock } = setup(Promise.resolve({}))
    entitiesMock['teamMembership'][`wrapTeamMembershipCollection`].returns({
      total: 100,
      skip: 0,
      limit: 10,
      items: [teamMembershipMock],
    })
    return api['getTeamMemberships']().then((r) => {
      expect(r).eql({
        total: 100,
        skip: 0,
        limit: 10,
        items: [teamMembershipMock],
      })
    })
  })

  test('API call getTeamSpaceMembership', async () => {
    const { api, entitiesMock } = setup(Promise.resolve({}))
    entitiesMock['teamSpaceMembership'][`wrapTeamSpaceMembership`].returns(teamSpaceMembershipMock)
    return api['getTeamSpaceMembership']('eid').then((r) => {
      expect(r).eql(teamSpaceMembershipMock)
    })
  })

  test('API call getTeamSpaceMembership fails', async () => {
    const error = cloneMock('error')
    const { api } = setup(Promise.reject(error))

    return api['getTeamSpaceMembership']('eid').then(
      () => {},
      (r) => {
        expect(r.name).equals('404 Not Found')
      }
    )
  })

  test('API call getTeamSpaceMemberships', async () => {
    const { api, entitiesMock } = setup(Promise.resolve({}))
    entitiesMock['teamSpaceMembership'][`wrapTeamSpaceMembershipCollection`].returns({
      total: 100,
      skip: 0,
      limit: 10,
      items: [teamSpaceMembershipMock],
    })
    return api['getTeamSpaceMemberships']({ teamId: 'teamid' }).then((r) => {
      expect(r).eql({
        total: 100,
        skip: 0,
        limit: 10,
        items: [teamSpaceMembershipMock],
      })
    })
  })

  test('API call getTeamMemberships fails', async () => {
    const error = cloneMock('error')
    const { api } = setup(Promise.reject(error))

    return api['getTeamSpaceMemberships']({ teamId: 'teamid' }).then(
      () => {},
      (r) => {
        expect(r.name).eql('404 Not Found')
      }
    )
  })

  test('API call getTeamMemberships for all teams', async () => {
    const { api, entitiesMock } = setup(Promise.resolve({}))
    entitiesMock['teamSpaceMembership'][`wrapTeamSpaceMembershipCollection`].returns({
      total: 100,
      skip: 0,
      limit: 10,
      items: [teamSpaceMembershipMock],
    })
    return api['getTeamSpaceMemberships']().then((r) => {
      expect(r).eql({
        total: 100,
        skip: 0,
        limit: 10,
        items: [teamSpaceMembershipMock],
      })
    })
  })
})
