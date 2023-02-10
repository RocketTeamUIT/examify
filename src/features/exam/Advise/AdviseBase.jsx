import AdviseLayout from './AdviseLayout';
import { Breadcrumb, Button } from 'components/ui';
import { Link } from 'react-router-dom';
import { Bar } from '../components';
import { CommentList } from 'features/comments';
import { dataComment } from '../data';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { Modal } from 'components/ui';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { GroupButtonTabs } from '../components';

function AdviseBase() {
  const { commentList, totalRootComment, totalComment } = dataComment;
  const [modalVisible, setModalVisible] = useState(false);
  const show = () => setModalVisible(true);
  const hide = () => setModalVisible(false);

  return (
    <>
      <AdviseLayout>
        <Breadcrumb hierarchy={['Lịch sử thi', 'ETS 2022']} />
        <h3 className="mt-5 text-h3 font-bold mb-10">ETS 2022 - Test 2</h3>

        <GroupButtonTabs
          tabList={[{ title: 'Part 2' }, { title: 'Part 3' }, { title: 'Part 4' }, { title: 'Part 5' }]}
        />

        {/* Tỉ lệ chính xác */}
        <div className="mt-5">
          <h4 className="text-h5 font-medium">Tỉ lệ chính xác:</h4>
          <div className="flex gap-6 pl-16 items-end mt-2">
            {/* Bar */}
            <div className="text-sm text-t_dark ml-4 flex items-center">
              {/* Circular border */}
              <div
                className="flex items-center justify-center h-[112px] w-[112px] rounded-full relative progress-wrapper "
                style={{
                  '--border-color': '#0E46C7',
                  '--degree': Math.round(0.83 * 360) + 'deg',
                }}
              >
                {/* Percentage number */}
                <span className="text-h4 font-bold w-[104px] h-[104px] rounded-full bg-white flex items-center justify-center">
                  {Math.round(0.83 * 100)}%
                </span>
              </div>
            </div>
            <p className="text-h6 text-primary">
              <span className="text-h2 font-extrabold">19</span> đáp án đúng
            </p>
            <p className="text-h6 text-ac_red">
              <span className="text-h2 font-extrabold">4</span> đáp án sai
            </p>
          </div>
        </div>

        {/* Dạng câu hỏi cần khắc phục */}
        <div className="mt-10">
          <h4 className="text-h5 font-medium">Dạng câu hỏi cần khắc phục:</h4>
          <div className="pl-12">
            <table className="w-full mt-2">
              <colgroup>
                <col span={1} className="w-1/3" />
                <col span={1} className="w-1/3" />
                <col span={1} className="w-1/4" />
                <col span={1} className="w-1/12" />
              </colgroup>

              <tbody>
                <tr>
                  <td className="text-h6 pr-4 py-2"># [Part 2] Câu hỏi lựa chọn</td>
                  <td className="py-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-h6">0%</span>
                      <Bar min={0} max={100} curValue={55} seek={false} colorStart="#2860E1" colorStop="#2860E133" />
                      <span className="text-h6">100%</span>
                    </div>
                  </td>
                  <td className="pl-4 py-2">
                    <Button type="outline" height={32}>
                      Luyện tập
                    </Button>
                  </td>
                  <td onClick={modalVisible ? hide : show}>
                    <Tippy content="Xem nguyên nhân và cách khắc phục">
                      <span className="flex justify-center cursor-pointer">
                        <HiOutlineQuestionMarkCircle size={24} color="#2860E1" />
                      </span>
                    </Tippy>
                  </td>
                </tr>
                <tr>
                  <td className="text-h6 pr-4 py-2"># [Part 2] Câu hỏi gián tiếp</td>
                  <td className="py-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-h6">0%</span>
                      <Bar min={0} max={100} curValue={70} seek={false} colorStart="#2860E1" colorStop="#2860E133" />
                      <span className="text-h6">100%</span>
                    </div>
                  </td>
                  <td className="pl-4 py-2">
                    <Button type="outline" height={32}>
                      Luyện tập
                    </Button>
                  </td>
                  <td onClick={modalVisible ? hide : show}>
                    <Tippy content="Xem nguyên nhân và cách khắc phục">
                      <span className="flex justify-center cursor-pointer">
                        <HiOutlineQuestionMarkCircle size={24} color="#2860E1" />
                      </span>
                    </Tippy>
                  </td>
                </tr>
                <tr>
                  <td className="text-h6 pr-4 py-2"># [Part 2] Câu hỏi Yes / No</td>
                  <td className="py-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-h6">0%</span>
                      <Bar min={0} max={100} curValue={65} seek={false} colorStart="#2860E1" colorStop="#2860E133" />
                      <span className="text-h6">100%</span>
                    </div>
                  </td>
                  <td className="pl-4 py-2">
                    <Button type="outline" height={32}>
                      Luyện tập
                    </Button>
                  </td>
                  <td onClick={modalVisible ? hide : show}>
                    <Tippy content="Xem nguyên nhân và cách khắc phục">
                      <span className="flex justify-center cursor-pointer">
                        <HiOutlineQuestionMarkCircle size={24} color="#2860E1" />
                      </span>
                    </Tippy>
                  </td>
                </tr>
                <tr>
                  <td className="text-h6 pr-4 py-2"># [Part 2] Câu hỏi đuôi</td>
                  <td className="py-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-h6">0%</span>
                      <Bar min={0} max={100} curValue={62} seek={false} colorStart="#2860E1" colorStop="#2860E133" />
                      <span className="text-h6">100%</span>
                    </div>
                  </td>
                  <td className="pl-4 py-2">
                    <Button type="outline" height={32}>
                      Luyện tập
                    </Button>
                  </td>
                  <td onClick={modalVisible ? hide : show}>
                    <Tippy content="Xem nguyên nhân và cách khắc phục">
                      <span className="flex justify-center cursor-pointer">
                        <HiOutlineQuestionMarkCircle size={24} color="#2860E1" />
                      </span>
                    </Tippy>
                  </td>
                </tr>
                <tr>
                  <td className="text-h6 pr-4 py-2"># [Part 2] Câu hỏi - When</td>
                  <td className="py-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-h6">0%</span>
                      <Bar min={0} max={100} curValue={67} seek={false} colorStart="#2860E1" colorStop="#2860E133" />
                      <span className="text-h6">100%</span>
                    </div>
                  </td>
                  <td className="pl-4 py-2">
                    <Button type="outline" height={32}>
                      Luyện tập
                    </Button>
                  </td>
                  <td onClick={modalVisible ? hide : show}>
                    <Tippy content="Xem nguyên nhân và cách khắc phục">
                      <span className="flex justify-center cursor-pointer">
                        <HiOutlineQuestionMarkCircle size={24} color="#2860E1" />
                      </span>
                    </Tippy>
                  </td>
                </tr>
                <tr>
                  <td className="text-h6 pr-4 py-2"># [Part 2] Câu hỏi Where</td>
                  <td className="py-2">
                    <div className="flex gap-2 items-center">
                      <span className="text-h6">0%</span>
                      <Bar min={0} max={100} curValue={49} seek={false} colorStart="#2860E1" colorStop="#2860E133" />
                      <span className="text-h6">100%</span>
                    </div>
                  </td>
                  <td className="pl-4 py-2">
                    <Button type="outline" height={32}>
                      Luyện tập
                    </Button>
                  </td>
                  <td onClick={modalVisible ? hide : show}>
                    <Tippy content="Xem nguyên nhân và cách khắc phục">
                      <span className="flex justify-center cursor-pointer">
                        <HiOutlineQuestionMarkCircle size={24} color="#2860E1" />
                      </span>
                    </Tippy>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Nhận tư vấn từ cố vấn */}
        <div className="mt-10">
          <h4 className="text-h5 font-medium">Nhận tư vấn từ cố vấn:</h4>
          <div className="mt-4 pl-16">
            <CommentList
              includeContainerTemp={true}
              comments={commentList}
              totalComments={totalComment}
              totalRootComments={totalRootComment}
              setType={() => {}}
              includeHeader={false}
            />
          </div>
        </div>
      </AdviseLayout>
      <Modal isShowing={modalVisible} hide={hide} header="Nguyên nhân và cách khắc phục" maxWidth="max-w-[700px]">
        {/* Nguyên nhân */}
        <div className="mt-10">
          <h4 className="text-h5 font-medium">Nguyên nhân:</h4>
          <ul className="flex flex-col gap-3 text-h6 list-disc pl-16 mt-2">
            <li>Thiếu vốn từ vựng</li>
            <li>Khả năng phán đoán chưa nhạy bén</li>
          </ul>
        </div>

        {/* Phương pháp cải thiện */}
        <div className="mt-10">
          <h4 className="text-h5 font-medium">Phương pháp cải thiện:</h4>
          <ul className="flex flex-col gap-3 text-h6 list-disc pl-16 mt-2">
            <li>
              Bổ sung một số từ vựng cho Part 2{' '}
              <Link to={'#'} className="font-medium text-primary">
                (download ngay tại đây)
              </Link>
            </li>
            <li>
              Luyện nghe bảng ngữ âm{' '}
              <Link to={'#'} className="font-medium text-primary">
                (link video tại đây)
              </Link>
            </li>
            <li>Bạn cần dành ít nhất 30 phút mỗi ngày để luyện nghe</li>
            <li>Bạn cần thực hành nhiều với dạng câu hỏi này</li>
          </ul>
        </div>
      </Modal>
    </>
  );
}

export default AdviseBase;
