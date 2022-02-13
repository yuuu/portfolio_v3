export type AmplifyDependentResourcesAttributes = {
  api: {
    portfolio: {
      GraphQLAPIIdOutput: 'string'
      GraphQLAPIEndpointOutput: 'string'
    }
  }
  auth: {
    portfolio88ead49188ead491: {
      IdentityPoolId: 'string'
      IdentityPoolName: 'string'
      UserPoolId: 'string'
      UserPoolArn: 'string'
      UserPoolName: 'string'
      AppClientIDWeb: 'string'
      AppClientID: 'string'
    }
  }
  function: {
    portfolioNpm: {
      Arn: 'string'
    }
    fetchQiita: {
      Name: 'string'
      Arn: 'string'
      Region: 'string'
      LambdaExecutionRole: 'string'
      CloudWatchEventRule: 'string'
    }
  }
}
