import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';

export default class GridMenuSection extends Component {
    render() {
        const items = [
            {name: 'Đại số', code: '#1abc9c'},
            {name: 'Hình học', code: '#1abc9c'},

            {name: 'Chương 1: Mệnh đề- tập hợp', code: '#db7537'},
            {name: 'Chương 2: Hàm số bậc nhất và hàm số bậc hai', code: '#db7537'},
            {name: 'Chương 3: Phương trình- Hệ phương trình', code: '#db7537'},
            {name: 'Chương 4: Bất đẳng thức- Bất phương trình', code: '#db7537'},
            {name: 'Chương 5: Thống kê', code: '#db7537'},
            {name: 'Chương 6: Góc lượng giác công thức lượng giác', code: '#db7537'},
            {name: 'Chương 1: Vecto', code: '#db7537'},
            {name: 'Chương 2: Tích vô hướng 2 vecto và ứng dụng', code: '#db7537'},
            {name: 'Chương 3: Tọa độ 0xy', code: '#db7537'},

            {name: 'Chương 1: Hàm số lượng giác và phương trình lượng giác', code: '#c45743'},
            {name: 'Chương 2: Tổ hợp- Xác suât', code: '#c45743'},
            {name: 'Chương 3: CSC-CSN', code: '#c45743'},
            {name: 'Chương 4: Giới hạn', code: '#c45743'},
            {name: 'Chương 5: Đạo hàm', code: '#c45743'},
            {name: 'Chương 1: Phép dời hình- Phép đồng dạng trong mặt phẳng', code: '#c45743'},
            {name: 'Chương 2: Đường thẳng và mặt phẳng trong không gian', code: '#c45743'},
            {name: 'Chương 3: Vecto trong không gian ', code: '#c45743'},

            {name: 'Chương 1: Ứng dụng đạo hàm để khảo sát hàm số', code: '#c46fb1'},
            {name: 'Chương 2: Hàm số mũ- Hàm số logarit', code: '#c46fb1'},
            {name: 'Chương 3: Nguyên hàm- Tích phân và ứng dụng', code: '#c46fb1'},
            {name: 'Chương 4: Số phức', code: '#c46fb1'},
            {name: 'Chương 1: Khối đa diện', code: '#c46fb1'},
            {name: 'Chương 2: Mặt nón- mặt cầu- mặt trụ', code: '#c46fb1'},
            {name: 'Chương 3: Phương pháp tọa độ trong không gian( Tọa độ 0xyz)', code: '#c46fb1'},
        ];
        return (
            <SectionGrid
                // itemDimension={90}
                // staticDimension={300}
                // fixed
                // spacing={20}
                sections={[
                    {
                        title: 'Math 9',
                        data: items.slice(0, 2),
                    },
                    {
                        title: 'Math 10',
                        data: items.slice(2, 11),
                    },
                    {
                        title: 'Math 11',
                        data: items.slice(11, 19),
                    },
                    {
                        title: 'Math 12',
                        data: items.slice(19, 26),
                    },
                ]}
                style={styles.gridView}
                renderItem={({item, section, index}) => (
                    <TouchableOpacity onPress={() => {
                        console.log(item.code)
                        this.props.navigation.navigate('ListTest');
                    }}>
                        <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            {/*<Text style={styles.itemCode}>{item.code}</Text>*/}
                        </View>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#2b4f72',
        color: 'white',
        padding: 10,
    },
});
