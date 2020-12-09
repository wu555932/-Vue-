<template>
    <div>
        <div class="acount">
            <!-- 头像标签 -->
            <span></span>
            <div class="acountinfo">
                <h1>线上易购</h1>
                <span>账号:</span>
            </div>
        </div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						账号与安全
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						隐私
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						通用
					</a>
				</li>
			</ul>
			<ul class="mui-table-view" style="margin-top: 25px;">
				<li class="mui-table-view-cell">
					<a id="about" class="mui-navigate-right">
						关于线上易购    
					</a>
				</li>
			</ul>
			<ul class="mui-table-view" style="margin-top: 25px;">
				<li class="mui-table-view-cell">
					<a style="text-align: center;color: #FF3B30;">
						退出登录
					</a>
				</li>
			</ul>
		</div>
    </div>
</template>
<script>
import '../../lib/mui/css/mui.min.css'
export default{

}
</script>
<style scoped lang="scss">
.acount{
    display: flex;
    .acountinfo{
        h1{
            font-size: 16px;
            font-weight: bold;
        }
    }
}

</style>