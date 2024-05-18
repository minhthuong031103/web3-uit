import { TouchableOpacity, View, Text } from 'react-native';
import { useConnect } from 'wagmi';

export function Profile() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  console.log('🚀 ~ Profile ~ connectors:', connectors);

  return (
    <View>
      {connectors.map((connector) => (
        <TouchableOpacity
          disabled={!connector.ready}
          key={connector.id}
          onPress={() => connect({ connector })}
        >
          <Text>
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </Text>
        </TouchableOpacity>
      ))}

      {error && <div>{error.message}</div>}
    </View>
  );
}
