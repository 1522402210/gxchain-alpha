<template>
    <div class="layout">
        <Layout class="layout-container">
            <Sider style="background: #151935;">
                <router-link class="nav-item" :to="{name:'import-recover'}">
                    {{$t('importSetting.title.importRecover')}}
                </router-link>
                <router-link class="nav-item" :to="{name:'api-server'}">{{$t('importSetting.title.entryPoint')}}
                </router-link>
                <router-link class="nav-item" :to="{name:'compile-server'}">
                    {{$t('importSetting.title.compileServer')}}
                </router-link>
                <router-link class="nav-item" :to="{name:'tool'}">
                    {{$t('tool.title.tool')}}
                </router-link>
                <a class="nav-item clearCacheBtn" @click="onClearCacheClick">{{$t('setting.clearCache')}}
                </a>
            </Sider>
            <Content style="padding: 20px 30px;">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </Content>
        </Layout>
    </div>
</template>

<script>
    import {storage} from '@/store'
    import {remote} from 'electron'

    export default {
        name: 'importSettingPage',
        methods: {
            onClearCacheClick: function () {
                this.$Modal.confirm({
                    title: this.$t('setting.title.confirmClearCache'),
                    content: this.$t('setting.content.confirmClearCache'),
                    onOk: () => {
                        storage.clear()
                        this.$router.push({name: '/'})
                        remote.getCurrentWindow().reload()
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    @import "@styles/_variable.scss";

    .layout-container {
        height: calc(100vh - 64px - 32px);
    }

    .nav-item {
        display: block;
        margin: auto;
        margin-top: 20px;
        width: 120px;
        height: 32px;
        line-height: 32px;
        box-sizing: border-box;
        color: white;
        border: 1px solid #6699ff;
        text-align: center;

        &.router-link-active {
            color: $base-color;
        }
    }

    .clearCacheBtn {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #ed4014;
        border: 1px solid #ed4014;
    }
</style>
