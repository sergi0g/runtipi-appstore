# Synapse

Synapse is an open source [Matrix](https://matrix.org/) homeserver implementation, written and maintained by [Element](https://element.io/). [Matrix](https://github.com/matrix-org) is the open standard for secure and interoperable real time communications.

## Setup

Before you start chatting, you'll need to create an account for yourself. Run the following command and complete the form:
```bash
docker exec -it synapse_<appstore>-synapse-1 register_new_matrix_user -c /data/homeserver.yaml
```
Make sure to replace `<appstore>` with the name you have given this appstore.

## Configuration

While the app is designed to work out of the box, if you plan on running a large Matrix server on the internet, you'll probably need to take a look at the configuration options ([documentation](https://element-hq.github.io/synapse/latest/usage/configuration/config_documentation.html)).
Get started by editing the configuration file at `app-data/<appstore>/synapse/data/data/homeserver.yaml`.
